import TextField from '@mui/material/TextField';
import {FieldComponentProps} from "../Field";

const Textarea = ({disabled, setValue}: FieldComponentProps) => {
    return <TextField
        disabled={disabled}
        multiline
        rows={4}
        onChange={(e) => setValue(e.target.value)}
        variant="standard"/>
}

export default Textarea;
