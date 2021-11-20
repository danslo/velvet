import {Box, Checkbox, FormControl, FormControlLabel, FormGroup, Grid} from "@mui/material";
import React, {Dispatch, FunctionComponent} from "react";
import Text from "./Text/Text";
import Select from "./Select/Select";
import {
    ConfigurationField,
    ConfigurationOption,
    useRestoreConfigurationMutation,
    useSaveConfigurationMutation
} from "../../../types";
import {withSnackbar, WithSnackbarProps} from "../../../utils/snackbar";
import MultiSelect from "./MultiSelect/MultiSelect";
import Textarea from "./Textarea/Textarea";
import {ConfigurationAction, updateConfigurationValue} from "../../../actions/configuration.actions";

type FieldProps = {
    field: ConfigurationField;
    dispatch: Dispatch<ConfigurationAction>;
} & WithSnackbarProps;

export type FieldComponentProps = {
    disabled: boolean;
    value: string | null;
    setValue: (value: string) => void;
    options: Array<ConfigurationOption>;
}

const FieldComponents: { [type: string]: FunctionComponent<FieldComponentProps> } = {
    text: Text,
    select: Select,
    multiselect: MultiSelect,
    textarea: Textarea
}

const Field = ({field, dispatch}: FieldProps) => {
    const [restoreConfigurationMutation] = useRestoreConfigurationMutation();
    const [saveConfigurationMutation] = useSaveConfigurationMutation();

    const setValue = (value: string) => {
        // dispatch
        updateConfigurationValue(
            dispatch,
            saveConfigurationMutation,
            field.path,
            value
        );
    }

    const setInherit = (inherit: string) => {
        // dispatch
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
                        disabled: field.inherit,
                        value: field.value,
                        setValue: setValue,
                        options: field.options ?? []
                    }))
                    || <>{field.type} not implemented</>}
                </FormControl>
            </Grid>
            <Grid item xs={2} sx={{mb: 2}}>
                {field.show_inherit && (
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={field.inherit} onChange={e => setInherit(e.target.value)}/>}
                            label="Use system value"/>
                    </FormGroup>
                )}
            </Grid>
        </Grid>
    )
}

export default withSnackbar(Field);
