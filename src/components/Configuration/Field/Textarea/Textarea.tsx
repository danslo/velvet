import TextField from '@mui/material/TextField';
import {FieldComponentProps} from "../Field";
import {useCallback} from "react";
import {debounce} from "@mui/material";

const Textarea = ({disabled, setValue}: FieldComponentProps) => {
    const handleChange = useCallback(debounce((e) => {
        setValue(e.target.value);
    }, 500), []);

    return <TextField
        disabled={disabled}
        multiline
        rows={4}
        onChange={handleChange}
        variant="standard"/>
}

export default Textarea;
