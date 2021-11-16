import {Box, Checkbox, FormControlLabel, FormGroup, Grid} from "@mui/material";
import React, {ChangeEvent, FunctionComponent, useState} from "react";
import Text from "./Text/Text";
import Select from "./Select/Select";
import {ConfigurationField, ConfigurationOption, Maybe} from "../../../types";

type FieldProps = {
    field: ConfigurationField;
}

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

const Field = ({field}: FieldProps) => {
    const [inherit, setInherit] = useState(field!.inherit);
    const [value, setValue] = useState(field!.value);

    const handleChangeValue = (value: string | null) => {
        // todo: debounce and save config value
        setValue(value);

        console.log(value);
    }

    const handleInherit = (event: ChangeEvent<HTMLInputElement>) => {
        setInherit(event.target.checked);
        if (event.target.checked) {
            // todo: delete config value
            setValue(field!.value);
        }
    }

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
                    value: value,
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

export default Field;
