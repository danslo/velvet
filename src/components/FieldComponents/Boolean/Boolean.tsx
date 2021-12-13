import {FieldComponentProps} from "../FieldComponents";
import {Switch} from "@mui/material";

const Boolean = (props: FieldComponentProps) => (
    <Switch
        value={props.value}
        disabled={props.disabled}
        onChange={e => props.setValue(e.target.value)}
        required={props.required}
    />
)

export default Boolean;
