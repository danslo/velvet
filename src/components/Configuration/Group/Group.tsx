import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Field from "../Field/Field";
import React, {Dispatch} from "react";
import {ConfigurationField} from "../../../types";
import {ConfigurationAction} from "../../../actions/configuration.actions";

type GroupProps = {
    label: string
    fields: Array<ConfigurationField>
    dispatch: Dispatch<ConfigurationAction>
}

const Group = ({label, fields, dispatch}: GroupProps) => {
    return <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography dangerouslySetInnerHTML={{__html: label}}/>
        </AccordionSummary>
        <AccordionDetails>
            {fields.map(field => (<Field key={field.path} field={field} dispatch={dispatch}/>))}
        </AccordionDetails>
    </Accordion>
}

export default Group;
