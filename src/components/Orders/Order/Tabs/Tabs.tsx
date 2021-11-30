import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Link} from "react-router-dom";
import React from "react";

const Tabs = () => (
    <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography>Order View</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Box sx={{mb: 1}}>
                <Link style={{textDecoration: "none", color: "black", fontSize: "0.9rem"}}
                      to={"/"}>Information</Link>
            </Box>
            <Box sx={{mb: 1}}>
                <Link style={{textDecoration: "none", color: "black", fontSize: "0.9rem"}}
                      to={"/"}>Invoices</Link>
            </Box>
            <Box sx={{mb: 1}}>
                <Link style={{textDecoration: "none", color: "black", fontSize: "0.9rem"}}
                      to={"/"}>Credit Memos</Link>
            </Box>
            <Box sx={{mb: 1}}>
                <Link style={{textDecoration: "none", color: "black", fontSize: "0.9rem"}}
                      to={"/"}>Shipments</Link>
            </Box>
        </AccordionDetails>
    </Accordion>
)

export default Tabs;
