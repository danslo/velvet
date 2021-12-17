import {MenuItem, TextField} from "@mui/material";
import {FieldComponentProps, textFieldProps} from "../FieldComponents";

const Select = (props: FieldComponentProps) => (
    <TextField
        {...textFieldProps(props)}
        select
        SelectProps={{displayEmpty: true}}
        variant="standard">
        {props.options.map(option => (
            <MenuItem key={option.label} value={option.value ?? ''}>{option.label}</MenuItem>
        ))}
    </TextField>
);

export default Select;
