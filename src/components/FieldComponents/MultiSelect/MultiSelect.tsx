import {MenuItem, TextField} from "@mui/material";
import {FieldComponentProps} from "../FieldComponents";

const MultiSelect = ({disabled, options, value, setValue}: FieldComponentProps) => (
    <TextField
        select
        disabled={disabled}
        variant="standard"
        onChange={e => {
            // @ts-ignore
            setValue(e.target.value.join(','))
        }}
        SelectProps={{
            multiple: true,
            value: value?.split(','),
            autoWidth: true
        }}
    >
        {options?.map(option => (
            <MenuItem value={option.value ?? undefined}>{option.label}</MenuItem>
        ))}
    </TextField>
)

export default MultiSelect;
