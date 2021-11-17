import {MenuItem, TextField} from "@mui/material";
import {FieldComponentProps} from "../Field";
import {ChangeEvent, useState} from "react";

const Select = ({disabled, options, value, setValue}: FieldComponentProps) => {
    // todo: avoid state duplication, currently needed due to debouncing in handleChangeValue
    const [selectValue, setSelectValue] = useState(value);

    const handleSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        setSelectValue(event.target.value);
    }

    return (
        <TextField disabled={disabled} select value={selectValue} onChange={handleSelectChange} variant="standard">
            {options?.map(option => (
                <MenuItem value={option!.value ?? undefined}>{option!.label}</MenuItem>
            ))}
        </TextField>
    );
}

export default Select;
