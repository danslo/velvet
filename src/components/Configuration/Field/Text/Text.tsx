import TextField from '@mui/material/TextField';
import {FieldComponentProps} from "../Field";
import {ChangeEvent, useEffect} from "react";
import {useDebounce} from "@react-hook/debounce";

const Text = ({disabled, value, handleChangeValue}: FieldComponentProps) => {
    const [v, setValue] = useDebounce(value, 500);

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        handleChangeValue(v);
    }

    useEffect(() => {
        if (v) handleChangeValue(v);
    }, [v]);

    return <TextField disabled={disabled} value={value} onChange={handleTextChange} variant="standard"/>
}

export default Text;
