import {MenuItem, TextField} from "@mui/material";
import {FieldComponentProps} from "../FieldComponents";

const Select = (props: FieldComponentProps) => (
    <TextField
        disabled={props.disabled}
        error={!!props.error}
        helperText={props.error ? props.error.message : null}
        select
        value={props.value ?? ''}
        onChange={e => props.onChange(e.target.value)}
        SelectProps={{
            displayEmpty: true
        }}
        variant="standard">
        {props.options.map(option => (
            <MenuItem value={option.value ?? ''}>{option.label}</MenuItem>
        ))}
    </TextField>
);

export default Select;
