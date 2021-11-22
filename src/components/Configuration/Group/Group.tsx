import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Field from "../Field/Field";
import React from "react";
import {ConfigurationField} from "../../../types";

type GroupProps = {
    label: string;
    fields: Array<ConfigurationField>;
    saveConfiguration: (path: string, value: string) => void;
    restoreConfiguration: (path: string) => void;
}

const Group = ({label, fields, saveConfiguration, restoreConfiguration}: GroupProps) => {
    return <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography dangerouslySetInnerHTML={{__html: label}}/>
        </AccordionSummary>
        <AccordionDetails>
            {fields.map(field => (
                <Field
                    key={field.path}
                    field={field}
                    saveConfiguration={saveConfiguration}
                    restoreConfiguration={restoreConfiguration}/>
            ))}
        </AccordionDetails>
    </Accordion>
}

export default Group;
