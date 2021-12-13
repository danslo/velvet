import {MenuItem, TextField} from "@mui/material";
import {FieldComponentProps} from "../FieldComponents";

const Select = (props: FieldComponentProps) => (
    <TextField
        disabled={props.disabled}
        select
        value={props.value}
        onChange={e => props.setValue(e.target.value)}
        required={props.required}
        variant="standard">
        {props.options.map(option => (
            <MenuItem value={option.value ?? undefined}>{option.label}</MenuItem>
        ))}
    </TextField>
);

export default Select;
