import {FieldProps} from "../Field";
import {MenuItem, TextField} from "@mui/material";

const Select = ({field}: FieldProps) => (
    <TextField select value="0" variant="standard">
        <MenuItem value="0">No</MenuItem>
        <MenuItem value="1">Yes</MenuItem>
    </TextField>
);
export default Select;
