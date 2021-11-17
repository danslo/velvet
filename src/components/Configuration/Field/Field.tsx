import {Box, Checkbox, FormControlLabel, FormGroup, Grid} from "@mui/material";
import React, {ChangeEvent, FunctionComponent, useEffect, useState} from "react";
import Text from "./Text/Text";
import Select from "./Select/Select";
import {ConfigurationField, ConfigurationOption, Maybe} from "../../../types";
import {withSnackbar, WithSnackbarProps} from "../../../helpers/SnackbarHOC";
import {useDebounce} from "@react-hook/debounce";

type FieldProps = {
    field: ConfigurationField;
} & WithSnackbarProps;

export type FieldComponentProps = {
    disabled: boolean;
    value: string | null;
    handleChangeValue: (value: string | null) => void;
    options: Maybe<Array<Maybe<ConfigurationOption>>>;
}

const FieldComponents: { [type: string]: FunctionComponent<FieldComponentProps> } = {
    text: Text,
    select: Select
}

const Field = ({field, snackbarShowMessage}: FieldProps) => {
    const [inherit, setInherit] = useState(field!.inherit);
    const [value, setValue] = useDebounce(field!.value, 500);

    const handleChangeValue = (value: string | null) => {
        setValue(value);
    }

    const handleInherit = (event: ChangeEvent<HTMLInputElement>) => {
        setInherit(event.target.checked);
        if (event.target.checked) {
            snackbarShowMessage('System value restored.');

            // todo: actually delete value
            setValue(field!.value);
        }
    }

    useEffect(() => {
        if (value) {
            // todo: actually save value
            snackbarShowMessage('Configuration saved.');
        }
    }, [value]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={5} sx={{mb: 2, pr: 3, textAlign: "right"}}>
                <div dangerouslySetInnerHTML={{__html: field!.label}}/>
                {field!.comment && (
                    <Box sx={{fontSize: "0.8rem"}} dangerouslySetInnerHTML={{__html: field!.comment}}/>)}
            </Grid>
            <Grid item xs={5} sx={{mb: 2}}>
                {(FieldComponents[field!.type] && FieldComponents[field!.type]({
                    disabled: inherit,
                    value: field!.value,
                    handleChangeValue: handleChangeValue,
                    options: field!.options
                }))
                || <>{field!.type} not implemented</>}
            </Grid>
            <Grid item xs={2} sx={{mb: 2}}>
                {field!.show_inherit && (
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={inherit} onChange={handleInherit} defaultChecked={true}/>}
                            label="Use system value"/>
                    </FormGroup>
                )}
            </Grid>
        </Grid>
    )
}

export default withSnackbar(Field);
