import {useNavigate, useParams} from "react-router-dom";
import {Button, Paper} from "@mui/material";
import {useForm} from "react-hook-form";
import {useDeleteBlockMutation, useGetBlockQuery, useSaveBlockMutation} from "../../../types";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {withLayout} from "../../../hocs/layout";
import Header from "../../Header/Header";
import React from "react";
import Form from "./Form/Form";
import {useSnackbar} from "notistack";

const Block = () => {
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();
    const {blockId} = useParams();
    const {register, control, handleSubmit} = useForm();

    const isNewBlock = typeof blockId === 'undefined';

    const [saveBlockMutation] = useSaveBlockMutation();
    const [deleteBlockMutation] = useDeleteBlockMutation();
    const {data, loading, error} = useGetBlockQuery({skip: isNewBlock, variables: {block_id: parseInt(blockId!)}});

    const saveBlock = (input: any) => {
        saveBlockMutation({variables: {input: input}})
            .then(result => {
                if (result.data?.saveBlock) {
                    navigate('/blocks/' + result.data.saveBlock.block_id, {replace: true});
                    enqueueSnackbar('Block was saved.');
                }
            })
    };

    const deleteBlock = (blockId: number) => {
        deleteBlockMutation({variables: {block_id: blockId}})
            .then(result => {
                if (result.data?.deleteBlock) {
                    navigate('/blocks', {replace: true});
                    enqueueSnackbar('Block was deleted.');
                }
            })
    }

    return (
        <LoaderHandler loading={loading} error={error}>
            {!loading && (
                <>
                    <Header text={data ? "Block: " + data.block.identifier : "Add Block"}>
                        <Button variant="contained" onClick={handleSubmit(saveBlock)}>Save</Button>
                        {!isNewBlock && (
                            <Button
                                sx={{ml: 1}}
                                variant="contained"
                                onClick={() => deleteBlock(parseInt(blockId!))}>
                                Delete
                            </Button>
                        )}
                    </Header>
                    <Paper sx={{p: 3}}>
                        <Form data={data} register={register} control={control}/>
                    </Paper>
                </>
            )}
        </LoaderHandler>
    )
}

export default withLayout(Block);
