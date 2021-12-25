import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {
    DeleteBlockDocument,
    DeleteBlockMutation,
    DeleteBlockMutationVariables,
    GetBlockDocument,
    GetBlockQuery,
    GetBlockQueryVariables,
    SaveBlockDocument,
    SaveBlockMutation,
    SaveBlockMutationVariables
} from "../../../types";
import {withLayout} from "../../../hocs/layout";
import React from "react";
import Form from "./Form/Form";
import useCrud from "../../../hooks/crud";
import FormLayout from "../../FormLayout/FormLayout";

const Block = () => {
    const {blockId} = useParams();
    const {register, control, handleSubmit} = useForm();

    const {
        data,
        loading,
        error,
        onSave,
        onDelete,
        showDelete
    } = useCrud<GetBlockQuery, GetBlockQueryVariables, SaveBlockMutation, SaveBlockMutationVariables, DeleteBlockMutation, DeleteBlockMutationVariables>(
        GetBlockDocument,
        SaveBlockDocument,
        DeleteBlockDocument,
        {block_id: parseInt(blockId!)},
        result => '/blocks/' + result.data?.saveBlock.block_id,
        () => '/blocks',
        blockId
    );

    return (
        <FormLayout
            error={error}
            loading={loading}
            showDelete={showDelete}
            onDelete={() => onDelete({block_id: parseInt(blockId!)})}
            onSave={handleSubmit((input: any) => onSave({input: input}))}
            header={data ? "Block: " + data.block.identifier : "Add Block"}>
            <Form data={data} register={register} control={control}/>
        </FormLayout>
    )
}

export default withLayout(Block);
