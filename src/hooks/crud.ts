import * as Apollo from "@apollo/client";
import {FetchResult, TypedDocumentNode} from "@apollo/client";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";

function useCrud<LoadQuery, LoadVariables, SaveQuery, SaveVariables, DeleteQuery, DeleteVariables>(
    loadDocument: TypedDocumentNode<LoadQuery, LoadVariables>,
    saveDocument: TypedDocumentNode<SaveQuery, SaveVariables>,
    deleteDocument: TypedDocumentNode<DeleteQuery, DeleteVariables>,
    loadVariables: LoadVariables,
    getSaveReturnUrl: (result: FetchResult<SaveQuery>) => string,
    getDeleteReturnUrl: () => string,
    entityId?: string
) {
    const isNewEntity = typeof entityId === 'undefined';

    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();

    const {data, loading, error} = Apollo.useQuery<LoadQuery, LoadVariables>(loadDocument, {
        variables: loadVariables,
        skip: isNewEntity
    });

    const [saveMutation] = Apollo.useMutation<SaveQuery, SaveVariables>(saveDocument, {});
    const onSave = (variables: SaveVariables) => saveMutation({variables: variables})
        .then(result => {
            enqueueSnackbar('Successfully saved.');
            navigate(getSaveReturnUrl(result), {replace: true});
        })
        .catch(error => {
            enqueueSnackbar('Unable to save entity: ' + error.message, {variant: 'error'});
        });

    const [deleteMutation] = Apollo.useMutation<DeleteQuery, DeleteVariables>(deleteDocument, {});
    const onDelete = (variables: DeleteVariables) => deleteMutation({variables: variables})
        .then(() => {
            enqueueSnackbar('Successfully deleted.');
            navigate(getDeleteReturnUrl(), {replace: true});
        })
        .catch(error => {
            enqueueSnackbar('Unable to delete entity: ' + error.message, {variant: 'error'});
        })

    return {
        data: data,
        loading: loading,
        error: error,
        onSave: onSave,
        onDelete: onDelete,
        showDelete: !isNewEntity
    }
}

export default useCrud;
