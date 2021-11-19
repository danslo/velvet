import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Field from "../Field/Field";
import React from "react";
import {ConfigurationField, Maybe} from "../../../types";

type GroupProps = {
    label: string
    fields: Array<Maybe<ConfigurationField>>
}

const Group = ({label, fields}: GroupProps) => {
    return <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography dangerouslySetInnerHTML={{__html: label}}/>
        </AccordionSummary>
        <AccordionDetails>
            {fields.map(field => (<Field key={field!.path} field={field!}/>))}
        </AccordionDetails>
    </Accordion>
}

export default Group;
