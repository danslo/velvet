import TextField from '@mui/material/TextField';
import {FieldComponentProps} from "../Field";
import {useCallback} from "react";
import {debounce} from "@mui/material";

const Text = ({disabled, setValue}: FieldComponentProps) => {
    const handleChange = useCallback(debounce((e) => {
        setValue(e.target.value);
    }, 500), []);

    return <TextField
        disabled={disabled}
        onChange={handleChange}
        variant="standard"/>
}

export default Text;
