import TextField from '@mui/material/TextField';
import {FieldComponentProps, textFieldProps} from "../FieldComponents";

const Textarea = (props: FieldComponentProps) => (
    <TextField {...textFieldProps(props)} variant="standard" multiline rows={4}/>
)

export default Textarea;
