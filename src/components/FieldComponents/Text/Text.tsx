import TextField from '@mui/material/TextField';
import {FieldComponentProps} from "../FieldComponents";

const Text = (props: FieldComponentProps) => (
    <TextField
        disabled={props.disabled}
        onChange={(e) => props.setValue(e.target.value)}
        value={props.value}
        required={props.required}
        variant="standard"/>
);

export default Text;
