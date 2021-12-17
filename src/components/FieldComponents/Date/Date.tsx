import {FieldComponentProps, textFieldProps} from "../FieldComponents";
import {TextField} from "@mui/material";

const Date = (props: FieldComponentProps) => (
    <TextField {...textFieldProps(props)} type="date" sx={{width: 220}} InputLabelProps={{shrink: true}}/>
)

export default Date;
