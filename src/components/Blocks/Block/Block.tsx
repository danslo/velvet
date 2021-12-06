import {useParams} from "react-router-dom";
import {FormControlLabel, Paper, Switch, TextField, Typography} from "@mui/material";
import MUIRichTextEditor from "mui-rte";
import {useForm} from "react-hook-form";
import {withLayout} from "../../../hocs/layout";

const Block = () => {
    const {blockId} = useParams();
    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    const onSubmit = async (data: any) => { console.log(data); };

    /**
     * +---------------+--------------+------+-----+---------------------+-------------------------------+
     | Field         | Type         | Null | Key | Default             | Extra                         |
     +---------------+--------------+------+-----+---------------------+-------------------------------+
     | block_id      | smallint(6)  | NO   | PRI | NULL                | auto_increment                |
     | title         | varchar(255) | NO   | MUL | NULL                |                               |
     | identifier    | varchar(255) | NO   |     | NULL                |                               |
     | content       | mediumtext   | YES  |     | NULL                |                               |
     | creation_time | timestamp    | NO   |     | current_timestamp() |                               |
     | update_time   | timestamp    | NO   |     | current_timestamp() | on update current_timestamp() |
     | is_active     | smallint(6)  | NO   |     | 1                   |                               |
     +---------------+--------------+------+-----+---------------------+-------------------------------+

     */

    return (
        <Paper sx={{p: 3}}>
            <Typography variant="h6" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField {...register('title')} helperText="Title" />
                <br />
                <TextField {...register('identifier')} helperText="Identifier" />
                <br />
                <FormControlLabel control={<Switch {...register('is_active')} defaultChecked/>} label="Active"/>
                <MUIRichTextEditor label="Start typing..." />
                <br /><br />
                <input type="submit" />
            </form>
        </Paper>
    )
}

export default withLayout(Block);
