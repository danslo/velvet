import TextField from '@mui/material/TextField';
import {FieldComponentProps} from "../Field";

const Text = ({disabled, value, setValue}: FieldComponentProps) => {
    return <TextField
        disabled={disabled}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="standard"/>
}

export default Text;
