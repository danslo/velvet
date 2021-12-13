import TextField from '@mui/material/TextField';
import {FieldComponentProps} from "../FieldComponents";

const Textarea = ({disabled, value, setValue}: FieldComponentProps) => (
    <TextField
        disabled={disabled}
        multiline
        rows={4}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="standard"/>
)

export default Textarea;
