import {Box, Checkbox, debounce, FormControl, FormControlLabel, FormGroup, Grid} from "@mui/material";
import React, {useState} from "react";
import {ConfigurationField} from "../../../types";
import {FieldComponents} from "../../FieldComponents/FieldComponents";

type FieldProps = {
    field: ConfigurationField;
    saveConfiguration: (path: string, value: string) => void;
    restoreConfiguration: (path: string) => void;
}

const Field = ({field, saveConfiguration, restoreConfiguration}: FieldProps) => {
    const [value, setValue] = useState(field.value);
    const [inherit, setInherit] = useState(field.inherit);

    const setFieldValue = (value: string) => {
        setValue(value);
        debouncedSaveConfiguration(value);
    }

    const debouncedSaveConfiguration = debounce((value) => {
        if (value !== null) {
            saveConfiguration(field.path, value);
        }
    }, 500);

    const setInheritValue = (value: boolean) => {
        setInherit(value);
        if (value) {
            setValue(field.value);
            restoreConfiguration(field.path);
        }
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={5} sx={{mb: 2, pr: 3, textAlign: "right"}}>
                <div dangerouslySetInnerHTML={{__html: field.label}}/>
                {field.comment && (<Box sx={{fontSize: "0.8rem"}} dangerouslySetInnerHTML={{__html: field.comment}}/>)}
            </Grid>
            <Grid item xs={5} sx={{mb: 2}}>
                <FormControl fullWidth sx={{pr: 4}}>
                    {(FieldComponents[field.type]?.({
                        disabled: inherit,
                        value: value,
                        onChange: setFieldValue,
                        options: field.options ?? []
                    }))
                    || <>{field.type} not implemented</>}
                </FormControl>
            </Grid>
            <Grid item xs={2} sx={{mb: 2}}>
                {field.show_inherit && (
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={inherit} onChange={e => setInheritValue(e.target.checked)}/>}
                            label={field.inherit_label}/>
                    </FormGroup>
                )}
            </Grid>
        </Grid>
    )
}

export default Field;
