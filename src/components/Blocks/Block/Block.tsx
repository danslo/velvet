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
    const blockVariables = {block_id: parseInt(blockId!)};
    const isNewBlock = typeof blockId === 'undefined';

    const {register, control, handleSubmit} = useForm();

    const {
        data,
        loading,
        error,
        onSave,
        onDelete
    } = useCrud<GetBlockQuery, GetBlockQueryVariables, SaveBlockMutation, SaveBlockMutationVariables, DeleteBlockMutation, DeleteBlockMutationVariables>(
        GetBlockDocument,
        SaveBlockDocument,
        DeleteBlockDocument,
        blockVariables,
        result => '/blocks/' + result.data!.saveBlock.block_id,
        () => '/blocks',
        isNewBlock
    );

    return (
        <FormLayout
            error={error}
            loading={loading}
            showDelete={!isNewBlock}
            onDelete={() => onDelete(blockVariables)}
            onSave={handleSubmit((input: any) => onSave({input: input}))}
            header={data ? "Block: " + data.block.identifier : "Add Block"}>
            <Form data={data} register={register} control={control}/>
        </FormLayout>
    )
}

export default withLayout(Block);
