import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, {FunctionComponent} from "react";

type GroupProps = {
    label: string;
}

const Group: FunctionComponent<GroupProps> = ({label, children}) => (
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography dangerouslySetInnerHTML={{__html: label}}/>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
)

export default Group;
