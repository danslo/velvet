import {MenuItem, TextField} from "@mui/material";
import {FieldComponentProps} from "../Field";
import {ChangeEvent} from "react";

const Select = ({disabled, options, value, handleChangeValue}: FieldComponentProps) => {
    const handleSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleChangeValue(event.target.value);
    }

    return (
        <TextField disabled={disabled} select value={value} onChange={handleSelectChange} variant="standard">
            {options?.map(option => (
                <MenuItem value={option!.value ?? undefined}>{option!.label}</MenuItem>
            ))}
        </TextField>
    );
}

export default Select;
