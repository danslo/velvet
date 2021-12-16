import TextField from '@mui/material/TextField';
import {FieldComponentProps} from "../FieldComponents";

const Textarea = (props: FieldComponentProps) => (
    <TextField
        inputRef={props.inputRef}
        disabled={props.disabled}
        error={!!props.error}
        helperText={props.error ? props.error.message : null}
        multiline
        rows={4}
        value={props.value ?? ''}
        onChange={(e) => props.onChange(e.target.value)}
        variant="standard"/>
)

export default Textarea;
