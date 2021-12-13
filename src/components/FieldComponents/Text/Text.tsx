import TextField from '@mui/material/TextField';
import {FieldComponentProps} from "../FieldComponents";

const Text = (props: FieldComponentProps) => (
    <TextField
        disabled={props.disabled}
        error={!!props.error}
        helperText={props.error ? props.error.message : null}
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
        variant="standard"/>
);

export default Text;
