import {FieldComponentProps} from "../FieldComponents";
import {TextField} from "@mui/material";

const Date = (props: FieldComponentProps) => (
    <TextField
        error={!!props.error}
        helperText={props.error ? props.error.message : null}
        type="date"
        defaultValue={props.value}
        sx={{width: 220}}
        disabled={props.disabled}
        onChange={e => props.onChange(e.target.value)}
        InputLabelProps={{shrink: true}}
    />
)

export default Date;
