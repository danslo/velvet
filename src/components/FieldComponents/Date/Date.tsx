import {FieldComponentProps} from "../FieldComponents";
import {TextField} from "@mui/material";

const Date = ({disabled, value, setValue}: FieldComponentProps) => (
    <TextField
        type="date"
        defaultValue={value}
        sx={{ width: 220 }}
        disabled={disabled}
        onChange={e => setValue(e.target.value)}
        InputLabelProps={{shrink: true}}
    />
)

export default Date;
