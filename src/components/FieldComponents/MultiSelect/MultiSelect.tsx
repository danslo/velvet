import {MenuItem, TextField} from "@mui/material";
import {FieldComponentProps} from "../FieldComponents";

const MultiSelect = (props: FieldComponentProps) => (
    <TextField
        select
        disabled={props.disabled}
        variant="standard"
        required={props.required}
        onChange={e => {
            // @ts-ignore
            setValue(e.target.value.join(','))
        }}
        SelectProps={{
            multiple: true,
            value: props.value?.split(','),
            autoWidth: true
        }}
    >
        {props.options?.map(option => (
            <MenuItem value={option.value ?? undefined}>{option.label}</MenuItem>
        ))}
    </TextField>
)

export default MultiSelect;
