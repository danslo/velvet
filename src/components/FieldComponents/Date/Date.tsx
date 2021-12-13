import {FieldComponentProps} from "../FieldComponents";
import {TextField} from "@mui/material";

const Date = (props: FieldComponentProps) => (
    <TextField
        type="date"
        defaultValue={props.value}
        required={props.required}
        sx={{width: 220}}
        disabled={props.disabled}
        onChange={e => props.setValue(e.target.value)}
        InputLabelProps={{shrink: true}}
    />
)

export default Date;
