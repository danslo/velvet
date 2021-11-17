import {Box, Checkbox, FormControlLabel, FormGroup, Grid} from "@mui/material";
import React, {ChangeEvent, FunctionComponent, useState} from "react";
import Text from "./Text/Text";
import Select from "./Select/Select";
import {ConfigurationField, ConfigurationOption, Maybe} from "../../../types";
import {withSnackbar, WithSnackbarProps} from "../../../helpers/SnackbarHOC";

type FieldProps = { field: ConfigurationField } & WithSnackbarProps;

export type FieldComponentProps = {
    disabled: boolean;
    value: string | null;
    setValue: (value: string | null) => void;
    options: Maybe<Array<Maybe<ConfigurationOption>>>;
}

const FieldComponents: { [type: string]: FunctionComponent<FieldComponentProps> } = {
    text: Text,
    select: Select
}

const Field = ({field, snackbarShowMessage}: FieldProps) => {
    const [inherit, setInherit] = useState(field.inherit);
    const [value, setValue] = useState(field.value);

    const handleInherit = (e: ChangeEvent<HTMLInputElement>) => {
        setInherit(e.target.checked);
        setValue(field.value);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={5} sx={{mb: 2, pr: 3, textAlign: "right"}}>
                <div dangerouslySetInnerHTML={{__html: field.label}}/>
                {field.comment && (<Box sx={{fontSize: "0.8rem"}} dangerouslySetInnerHTML={{__html: field.comment}}/>)}
            </Grid>
            <Grid item xs={5} sx={{mb: 2}}>
                {(FieldComponents[field.type]?.({
                    disabled: inherit,
                    value: value,
                    setValue: setValue,
                    options: field.options
                }))
                || <>{field.type} not implemented</>}
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
