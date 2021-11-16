import TextField from '@mui/material/TextField';
import {FieldComponentProps} from "../Field";
import {ChangeEvent} from "react";

const Text = ({disabled, value, handleChangeValue}: FieldComponentProps) => {
    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleChangeValue(event.target.value);
    }

    return <TextField disabled={disabled} value={value} onChange={handleTextChange} variant="standard"/>
}

export default Text;
