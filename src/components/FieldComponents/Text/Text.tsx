import TextField from '@mui/material/TextField';
import {FieldComponentProps} from "../FieldComponents";

const Text = ({disabled, value, setValue}: FieldComponentProps) => (
    <TextField
        disabled={disabled}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        variant="standard"/>
);

export default Text;
