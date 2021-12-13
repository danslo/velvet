import {MenuItem, TextField} from "@mui/material";
import {FieldComponentProps} from "../FieldComponents";

const Select = ({disabled, options, value, setValue}: FieldComponentProps) => (
    <TextField
        disabled={disabled}
        select
        value={value}
        onChange={e => setValue(e.target.value)}
        variant="standard">
        {options.map(option => (
            <MenuItem value={option.value ?? undefined}>{option.label}</MenuItem>
        ))}
    </TextField>
);

export default Select;
