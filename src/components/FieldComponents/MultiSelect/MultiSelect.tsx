import {MenuItem, TextField} from "@mui/material";
import {FieldComponentProps, textFieldProps} from "../FieldComponents";

const MultiSelect = (props: FieldComponentProps) => (
    <TextField
        {...textFieldProps(props)}
        select
        variant="standard"
        onChange={e => {
            // @ts-ignore
            props.onChange(e.target.value.join(','))
        }}
        SelectProps={{multiple: true, value: props.value?.split(','), autoWidth: true}}
    >
        {props.options?.map(option => (
            <MenuItem value={option.value ?? undefined}>{option.label}</MenuItem>
        ))}
    </TextField>
)

export default MultiSelect;
