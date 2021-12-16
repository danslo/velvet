import {MenuItem, TextField} from "@mui/material";
import {FieldComponentProps} from "../FieldComponents";

const MultiSelect = (props: FieldComponentProps) => (
    <TextField
        inputRef={props.inputRef}
        select
        disabled={props.disabled}
        variant="standard"
        error={!!props.error}
        helperText={props.error ? props.error.message : null}
        onChange={e => {
            // @ts-ignore
            props.onChange(e.target.value.join(','))
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
