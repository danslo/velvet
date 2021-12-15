import {useParams} from "react-router-dom";
import {Button, FormControlLabel, Paper, Switch, TextField, Typography} from "@mui/material";
import MUIRichTextEditor from "mui-rte";
import {useForm} from "react-hook-form";
import {useGetBlockQuery, useSaveBlockMutation} from "../../../types";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {withLayout} from "../../../hocs/layout";
import {withSnackbar, WithSnackbarProps} from "../../../hocs/snackbar";

const Block = ({snackbarShowMessage}: WithSnackbarProps) => {
    const {blockId} = useParams();
    const {register, handleSubmit} = useForm({shouldUseNativeValidation: true});
    const [saveBlockMutation] = useSaveBlockMutation();

    const {data, loading, error} = useGetBlockQuery({
        variables: {
            block_id: parseInt(blockId!)
        }
    });

    const onSubmit = async (stuff: any) => {
        saveBlockMutation({
            variables: {
                input: stuff
            }
        }).then(result => {
            snackbarShowMessage('Block was successfully saved.');
        })
    };

    return (
        <LoaderHandler loading={loading} error={error}>
            {data && (
                <Paper sx={{p: 3}}>

                    <Typography variant="h6"/>
                    <form>
                        <input {...register('block_id')} value={data.block.block_id} hidden={true}/>

                        <TextField {...register('title')} defaultValue={data.block.title} helperText="Title"/>
                        <br/>
                        <TextField {...register('identifier')} defaultValue={data.block.identifier}
                                   helperText="Identifier"/>
                        <br/>
                        <FormControlLabel
                            control={<Switch {...register('is_active')}
                                             defaultChecked={!!data.block.is_active}/>}
                            label="Active"/>
                        <MUIRichTextEditor label="Start typing..." defaultValue={data.block.content}/>
                        <br/><br/><br/><br/>
                        <Button variant="contained" size="large" onClick={handleSubmit(onSubmit)}>Save</Button>
                    </form>
                </Paper>
            )}
        </LoaderHandler>
    )
}

export default withSnackbar(withLayout(Block));
