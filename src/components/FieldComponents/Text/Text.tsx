import TextField from '@mui/material/TextField';
import {FieldComponentProps, textFieldProps} from "../FieldComponents";

const Text = (props: FieldComponentProps) => (
    <TextField {...textFieldProps(props)} variant="standard"/>
)

export default Text;
