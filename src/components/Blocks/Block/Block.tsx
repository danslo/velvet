import {useNavigate, useParams} from "react-router-dom";
import {Button, FormControlLabel, Paper, Switch} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {useDeleteBlockMutation, useGetBlockQuery, useSaveBlockMutation} from "../../../types";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {withLayout} from "../../../hocs/layout";
import {useSnackbar} from "notistack";
import Header from "../../Header/Header";
import React from "react";
import Text from "../../FieldComponents/Text/Text";
import Textarea from "../../FieldComponents/Textarea/Textarea";

const Block = () => {
    const {enqueueSnackbar} = useSnackbar();
    const {blockId} = useParams();
    const navigate = useNavigate();
    const {register, control, handleSubmit} = useForm();
    const [saveBlockMutation] = useSaveBlockMutation();
    const [deleteBlockMutation] = useDeleteBlockMutation();
    const isNewBlock = typeof blockId === 'undefined';
    const {data, loading, error} = useGetBlockQuery({
        skip: isNewBlock,
        variables: {
            block_id: parseInt(blockId!)
        }
    });

    const saveBlock = (stuff: any /* todo */) => {
        saveBlockMutation({variables: {input: stuff}})
            .then(result => {
                if (result.data?.saveBlock) {
                    navigate('/blocks/' + result.data.saveBlock.block_id, {replace: true});
                    enqueueSnackbar('Block was saved.');
                }
            })
    };

    const deleteBlock = () => {
        deleteBlockMutation({variables: {block_id: parseInt(blockId!)}})
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
                        <Button variant="contained" onClick={handleSubmit(saveBlock)}>Save Block</Button>
                        {!isNewBlock && (
                            <Button sx={{ml: 1}} variant="contained" onClick={deleteBlock}>
                                Delete Block
                            </Button>
                        )}
                    </Header>
                    <Paper sx={{p: 3}}>
                        <form>
                            {data?.block.block_id && (
                                <input {...register('block_id')} value={data.block.block_id} hidden={true}/>
                            )}

                            <Controller
                                control={control}
                                defaultValue={data?.block.title}
                                name="title"
                                rules={{required: "Title is required."}}
                                render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                                    <Text
                                        label="Title"
                                        inputRef={ref}
                                        value={value}
                                        onChange={onChange}
                                        error={error}/>
                                )}/>
                            <br/><br/>

                            <Controller
                                control={control}
                                defaultValue={data?.block.identifier}
                                name="identifier"
                                rules={{required: "Identifier is required."}}
                                render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                                    <Text
                                        label="Identifier"
                                        inputRef={ref}
                                        value={value}
                                        onChange={onChange}
                                        error={error}/>
                                )}/>
                            <br/><br/>

                            <FormControlLabel
                                control={<Switch {...register('is_active')} defaultChecked={!!data?.block.is_active}/>}
                                label="Active"/>
                            <br/><br/>

                            <Controller
                                control={control}
                                defaultValue={data?.block.content}
                                name="content"
                                rules={{required: "Content is required."}}
                                render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                                    <Textarea
                                        label="Content"
                                        inputRef={ref}
                                        value={value}
                                        onChange={onChange}
                                        error={error}/>
                                )}/>
                        </form>
                    </Paper>
                </>
            )}
        </LoaderHandler>
    )
}

export default withLayout(Block);
