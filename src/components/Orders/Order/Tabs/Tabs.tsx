import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Link} from "react-router-dom";
import React from "react";

type TabsProps = {
    orderId: number
}

const Tabs = ({orderId}: TabsProps) => {
    const getTabLink = (tab: string) => "/orders/" + orderId + (tab ? "/" + tab : "");
    return (
        <Accordion defaultExpanded={true}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography>Order View</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{mb: 1}}>
                    <Link style={{textDecoration: "none", color: "black", fontSize: "0.9rem"}}
                          to={getTabLink('')}>Information</Link>
                </Box>
                <Box sx={{mb: 1}}>
                    <Link style={{textDecoration: "none", color: "black", fontSize: "0.9rem"}}
                          to={getTabLink('invoices')}>Invoices</Link>
                </Box>
                <Box sx={{mb: 1}}>
                    <Link style={{textDecoration: "none", color: "black", fontSize: "0.9rem"}}
                          to={getTabLink('creditmemos')}>Credit Memos</Link>
                </Box>
                <Box sx={{mb: 1}}>
                    <Link style={{textDecoration: "none", color: "black", fontSize: "0.9rem"}}
                          to={getTabLink('shipments')}>Shipments</Link>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}

export default Tabs;
