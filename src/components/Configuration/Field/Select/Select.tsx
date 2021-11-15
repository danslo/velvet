import {FieldProps} from "../Field";
import {MenuItem, TextField} from "@mui/material";

const Select = ({field}: FieldProps) => (
    <TextField select value={field.value} variant="standard">
        {field!.options?.map(option => (
            <MenuItem value={option!.value}>{option!.label}</MenuItem>
        ))}
    </TextField>
);

export default Select;
