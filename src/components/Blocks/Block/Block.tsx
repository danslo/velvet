import {useNavigate, useParams} from "react-router-dom";
import {Button, FormControlLabel, Paper, Switch, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {useGetBlockQuery, useSaveBlockMutation} from "../../../types";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {withLayout} from "../../../hocs/layout";
import {withSnackbar, WithSnackbarProps} from "../../../hocs/snackbar";

const Block = ({snackbarShowMessage}: WithSnackbarProps) => {
    const {blockId} = useParams();
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm({shouldUseNativeValidation: true});
    const [saveBlockMutation] = useSaveBlockMutation();
    const {data, loading, error} = useGetBlockQuery({
        skip: typeof blockId === 'undefined',
        variables: {
            block_id: parseInt(blockId!)
        }
    });

    const onSubmit = async (stuff: any /* todo */) => {
        saveBlockMutation({variables: {input: stuff}})
            .then(result => {
                if (result.data?.saveBlock) {
                    navigate('/blocks/' + result.data.saveBlock.block_id, {replace: true});
                    snackbarShowMessage('Block was successfully saved.');
                }
            })
    };

    return (
        <LoaderHandler loading={loading} error={error}>
            {!loading && (
                <Paper sx={{p: 3}}>
                    <form>
                        {data?.block.block_id && (
                            <input {...register('block_id')} value={data.block.block_id} hidden={true}/>
                        )}
                        <TextField {...register('title')}
                                   defaultValue={data?.block.title}
                                   variant="standard"
                                   helperText="Title"/>
                        <br/>
                        <TextField {...register('identifier')}
                                   defaultValue={data?.block.identifier}
                                   variant="standard"
                                   helperText="Identifier"/>
                        <br/>
                        <FormControlLabel
                            control={<Switch
                                {...register('is_active')}
                                defaultChecked={!!data?.block.is_active}/>}
                            label="Active"/>
                        <br/>
                        <TextField {...register('content')}
                                   defaultValue={data?.block.content}
                                   variant="standard"
                                   multiline rows={4}
                                   fullWidth={true}
                                   helperText="Content"/>
                        <br/><br/>
                        <Button variant="contained" size="large" onClick={handleSubmit(onSubmit)}>Save</Button>
                    </form>
                </Paper>
            )}
        </LoaderHandler>
    )
}

export default withSnackbar(withLayout(Block));
