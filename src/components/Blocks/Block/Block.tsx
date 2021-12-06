import {withLayout} from "../../../hocs/layout";
import {useParams} from "react-router-dom";
import {FormControl, FormControlLabel, FormGroup, Input, InputLabel, Switch} from "@mui/material";
import MUIRichTextEditor from "mui-rte";

const Block = () => {
    const {blockId} = useParams();

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
        <div>
            <FormControl>
                <InputLabel htmlFor="title">Title</InputLabel>
                <Input id="title"/>
            </FormControl>
            <br/><br/>
            <FormControl>
                <InputLabel htmlFor="identifier">Identifier</InputLabel>
                <Input id="identifier"/>
            </FormControl>
            <br/><br/>
            <FormControl>
                <MUIRichTextEditor id="content"  label="Start typing..." />
            </FormControl>
            <br/><br/>
            <FormControl>
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked/>} label="Active"/>
                </FormGroup>
            </FormControl>
        </div>
    )
}

export default withLayout(Block);
