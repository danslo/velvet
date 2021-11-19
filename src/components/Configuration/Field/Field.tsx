import {Box, Checkbox, debounce, FormControl, FormControlLabel, FormGroup, Grid} from "@mui/material";
import React, {ChangeEvent, FunctionComponent, useCallback, useState} from "react";
import Text from "./Text/Text";
import Select from "./Select/Select";
import {
    ConfigurationField,
    ConfigurationOption,
    Maybe,
    useRestoreConfigurationMutation,
    useSaveConfigurationMutation
} from "../../../types";
import {withSnackbar, WithSnackbarProps} from "../../../utils/snackbar";
import MultiSelect from "./MultiSelect/MultiSelect";
import Textarea from "./Textarea/Textarea";

type FieldProps = { field: ConfigurationField; } & WithSnackbarProps;

export type FieldComponentProps = {
    disabled: boolean;
    value: string | null;
    setValue: (value: string | null) => void;
    options: Maybe<Array<Maybe<ConfigurationOption>>>;
}

const FieldComponents: { [type: string]: FunctionComponent<FieldComponentProps> } = {
    text: Text,
    select: Select,
    multiselect: MultiSelect,
    textarea: Textarea
}

const Field = ({field, snackbarShowMessage}: FieldProps) => {
    const [inherit, setInherit] = useState(field.inherit);
    const [value, setValue] = useState(field.value);
    const [restoreConfigurationMutation] = useRestoreConfigurationMutation();
    const [saveConfigurationMutation] = useSaveConfigurationMutation();

    const handleInherit = (e: ChangeEvent<HTMLInputElement>) => {
        setInherit(e.target.checked);
        setValue(field.value);

        if (e.target.checked) {
            restoreConfigurationMutation({
                variables: {
                    path: field.path
                }
            }).then(result => {
                snackbarShowMessage('Restored configuration.');
                const restoredConfiguration = result.data?.restoreConfiguration;
                if (restoredConfiguration) {
                    setValue(restoredConfiguration);
                }
            });
        }
    }

    const debouncedSaveConfiguration = useCallback(debounce((value) => {
        if (value !== null) {
            saveConfigurationMutation({
                variables: {
                    path: field.path,
                    value: value
                }
            }).then(() => snackbarShowMessage('Saved configuration.'));
        }
    }, 500), []);

    const fieldSetValue = (value: string | null) => {
        setValue(value);
        debouncedSaveConfiguration(value);
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
                        setValue: fieldSetValue,
                        options: field.options
                    }))
                    || <>{field.type} not implemented</>}
                </FormControl>
            </Grid>
            <Grid item xs={2} sx={{mb: 2}}>
                {field.show_inherit && (
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={inherit}
                                    onChange={handleInherit}
                                />
                            }
                            label="Use system value"/>
                    </FormGroup>
                )}
            </Grid>
        </Grid>
    )
}

export default withSnackbar(Field);
