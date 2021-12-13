import TextField from '@mui/material/TextField';
import {FieldComponentProps} from "../FieldComponents";

const Textarea = (props: FieldComponentProps) => (
    <TextField
        disabled={props.disabled}
        multiline
        rows={4}
        value={props.value}
        required={props.required}
        onChange={(e) => props.setValue(e.target.value)}
        variant="standard"/>
)

export default Textarea;
