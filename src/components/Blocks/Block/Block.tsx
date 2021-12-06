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

    const {data, loading, error} = useGetBlockQuery({
        variables: {
            block_id: parseInt(blockId!)
        }
    });

    const onSubmit = async (stuff: any) => {
        console.log({...data?.block, ...stuff})
    };

    return (
        <Paper sx={{p: 3}}>
            <LoaderHandler loading={loading} error={error}>
                {data && (
                    <>
                        <Typography variant="h6"/>
                        <form>
                            <TextField {...register('title')} defaultValue={data.block.title} helperText="Title"/>
                            <br/>
                            <TextField {...register('identifier')} defaultValue={data.block.identifier}
                                       helperText="Identifier"/>
                            <br/>
                            <FormControlLabel defaultValue={data.block.is_active}
                                              control={<Switch {...register('is_active')} />}
                                              label="Active"/>
                            <MUIRichTextEditor label="Start typing..." defaultValue={data.block.content}/>
                            <br/><br/><br/><br/>
                            <Button variant="contained" size="large" onClick={handleSubmit(onSubmit)}>Save</Button>
                        </form>
                    </>
                )}
            </LoaderHandler>
        </Paper>
    )
}

export default withLayout(Block);
