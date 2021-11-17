import {Box, Checkbox, FormControl, FormControlLabel, FormGroup, Grid} from "@mui/material";
import React, {ChangeEvent, FunctionComponent, useState} from "react";
import Text from "./Text/Text";
import Select from "./Select/Select";
import {
    ConfigurationField,
    ConfigurationOption,
    Maybe,
    RestoreConfigurationDocument,
    RestoreConfigurationMutation,
    SaveConfigurationDocument,
    SaveConfigurationMutation
} from "../../../types";
import {withSnackbar, WithSnackbarProps} from "../../../helpers/SnackbarHOC";
import {client} from "../../../utils/client";
import {FetchResult} from "@apollo/client";
import MultiSelect from "./MultiSelect/MultiSelect";
import Textarea from "./Textarea/Textarea";

type FieldProps = { field: ConfigurationField } & WithSnackbarProps;

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

const restoreConfiguration = (path: string, snackbarShowMessage: (message: string) => void) => {
    client.mutate({
        mutation: RestoreConfigurationDocument,
        variables: {
            path: path
        }
    }).then((result: FetchResult<RestoreConfigurationMutation>) => {
        snackbarShowMessage('Restored configuration.');
    });
}

const saveConfiguration = (path: string, value: string, snackbarShowMessage: (message: string) => void) => {
    client.mutate({
        mutation: SaveConfigurationDocument,
        variables: {
            path: path,
            value: value
        }
    }).then((result: FetchResult<SaveConfigurationMutation>) => {
        snackbarShowMessage('Saved configuration.');
    });
}

const Field = ({field, snackbarShowMessage}: FieldProps) => {
    const [inherit, setInherit] = useState(field.inherit);
    const [value, setValue] = useState(field.value);

    const handleInherit = (e: ChangeEvent<HTMLInputElement>) => {
        setInherit(e.target.checked);
        setValue(field.value);

        if (e.target.checked) {
            restoreConfiguration(field.path, snackbarShowMessage);
        }
    }

    const handleValue = (value: string | null) => {
        setValue(value);
        if (value !== null) {
            saveConfiguration(field.path, value, snackbarShowMessage);
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
                        setValue: handleValue,
                        options: field.options
                    }))
                    || <>{field.type} not implemented</>}
                </FormControl>
            </Grid>
            <Grid item xs={2} sx={{mb: 2}}>
                {field.show_inherit && (
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={inherit} onChange={handleInherit}/>}
                            label="Use system value"/>
                    </FormGroup>
                )}
            </Grid>
        </Grid>
    )
}

export default withSnackbar(Field);
