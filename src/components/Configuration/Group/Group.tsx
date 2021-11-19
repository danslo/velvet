import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Field from "../Field/Field";
import React, {useReducer} from "react";
import {ConfigurationField} from "../../../types";
import {configurationReducer} from "../../../reducers/configuration.reducer";

type GroupProps = {
    label: string
    initialFields: Array<ConfigurationField>
}

const Group = ({label, initialFields}: GroupProps) => {
    const [fields, dispatch] = useReducer(configurationReducer, initialFields);

    return <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography dangerouslySetInnerHTML={{__html: label}}/>
        </AccordionSummary>
        <AccordionDetails>
            {fields.map(field => (<Field key={field.path} field={field}/>))}
        </AccordionDetails>
    </Accordion>
}

export default Group;
