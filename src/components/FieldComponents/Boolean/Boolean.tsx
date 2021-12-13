import {FieldComponentProps} from "../FieldComponents";
import {Switch} from "@mui/material";

const Boolean = ({disabled, value, setValue}: FieldComponentProps) => (
    <Switch value={value} disabled={disabled} onChange={e => setValue(e.target.value)} />
)

export default Boolean;
