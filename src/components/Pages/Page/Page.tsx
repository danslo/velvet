import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import useCrud from "../../../hooks/crud";
import {
    DeletePageDocument,
    DeletePageMutation,
    DeletePageMutationVariables,
    GetPageDocument,
    GetPageQuery,
    GetPageQueryVariables,
    SavePageDocument,
    SavePageMutation,
    SavePageMutationVariables
} from "../../../types";
import FormLayout from "../../FormLayout/FormLayout";
import Form from "../../Pages/Page/Form/Form";
import React from "react";
import {withLayout} from "../../../hocs/layout";

const Page = () => {
    const {pageId} = useParams();
    const pageVariables = {page_id: parseInt(pageId!)};
    const isNewPage = typeof pageId === 'undefined';

    const {register, control, handleSubmit} = useForm();

    const {
        data,
        loading,
        error,
        onSave,
        onDelete
    } = useCrud<GetPageQuery, GetPageQueryVariables, SavePageMutation, SavePageMutationVariables, DeletePageMutation, DeletePageMutationVariables>(
        GetPageDocument,
        SavePageDocument,
        DeletePageDocument,
        pageVariables,
        result => '/pages/' + result.data!.savePage.page_id,
        () => '/pages',
        isNewPage
    );

    return (
        <FormLayout
            error={error}
            loading={loading}
            showDelete={!isNewPage}
            onDelete={() => onDelete(pageVariables)}
            onSave={handleSubmit((input: any) => onSave({input: input}))}
            header={data ? "Page: " + data.page.identifier : "Add Page"}>
            <Form data={data} register={register} control={control}/>
        </FormLayout>
    )
}

export default withLayout(Page);
