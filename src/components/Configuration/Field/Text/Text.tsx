import TextField from '@mui/material/TextField';
import {FieldProps} from "../Field";

const Text = ({field}: FieldProps) => {
    return <TextField value={field.value} variant="standard"/>
}

export default Text;
