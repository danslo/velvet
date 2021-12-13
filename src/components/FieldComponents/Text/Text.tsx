import TextField from '@mui/material/TextField';
import {FieldComponentProps} from "../FieldComponents";

const Text = ({disabled, value, setValue}: FieldComponentProps) => {
    return <TextField
        disabled={disabled}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        variant="standard"/>
}

export default Text;
