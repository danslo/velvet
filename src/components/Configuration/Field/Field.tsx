import {ConfigurationField} from "../../../types";
import {Box, Grid} from "@mui/material";
import React, {FunctionComponent} from "react";
import Text from "./Text/Text";
import Select from "./Select/Select";

export type FieldProps = {
    field: ConfigurationField
}

const FieldTypes: { [type: string]: FunctionComponent<any> } = {
    text: Text,
    select: Select
}

const Field = ({field}: FieldProps) => (
    <Grid container spacing={2}>
        <Grid item xs={6} sx={{mb: 2, pr: 3, textAlign: "right"}}>
            <div dangerouslySetInnerHTML={{__html: field!.label}}/>
            {field!.comment && (<Box sx={{fontSize: "0.8rem"}} dangerouslySetInnerHTML={{__html: field!.comment}}/>)}
        </Grid>
        <Grid item xs={6} sx={{mb: 2}}>
            {
                (FieldTypes[field!.type] && FieldTypes[field!.type]({field: field})) ||
                <>{field!.type} not implemented</>
            }
        </Grid>
    </Grid>
)

export default Field;
