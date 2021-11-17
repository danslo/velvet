import {FormControl, MenuItem, TextField} from "@mui/material";
import {FieldComponentProps} from "../Field";

const MultiSelect = ({disabled, options, value, setValue}: FieldComponentProps) => {
    return (
        <FormControl fullWidth>
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
                    <MenuItem value={option!.value ?? undefined}>{option!.label}</MenuItem>
                ))}
            </TextField>
        </FormControl>
    )
}

export default MultiSelect;
