import {useParams} from "react-router-dom";
import {Button, FormControlLabel, Paper, Switch, TextField, Typography} from "@mui/material";
import MUIRichTextEditor from "mui-rte";
import {useForm} from "react-hook-form";
import {useGetBlockQuery} from "../../../types";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {withLayout} from "../../../hocs/layout";

const Block = () => {
    const {blockId} = useParams();
    const {register, handleSubmit} = useForm({shouldUseNativeValidation: true});
    const onSubmit = async (data: any) => {
        console.log(data);
    };

    const {data, loading, error} = useGetBlockQuery({
        variables: {
            block_id: parseInt(blockId!)
        }
    });

    return (
        <Paper sx={{p: 3}}>
            <LoaderHandler loading={loading} error={error}>
                {data && (
                    <>
                        <Typography variant="h6"/>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField {...register('title')} value={data.block.title} helperText="Title"/>
                            <br/>
                            <TextField {...register('identifier')} value={data.block.identifier}
                                       helperText="Identifier"/>
                            <br/>
                            <FormControlLabel value={data.block.is_active}
                                              control={<Switch {...register('is_active')} defaultChecked/>}
                                              label="Active"/>
                            <MUIRichTextEditor label="Start typing..." value={data.block.content}/>
                            <br/><br/><br/><br/>
                            <Button variant="contained" size="large">Save</Button>
                        </form>
                    </>
                )}
            </LoaderHandler>
        </Paper>
    )
}

export default withLayout(Block);
