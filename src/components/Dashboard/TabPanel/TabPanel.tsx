import React, {FunctionComponent} from "react";
import {Box, Typography} from "@mui/material";

type TabPanelProps = {
    index: number;
    value: number;
}

const TabPanel: FunctionComponent<TabPanelProps> = ({children, value, index, ...other}) => (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} {...other}>
        {value === index && (
            <Box>
                <Typography>{children}</Typography>
            </Box>
        )}
    </div>
);

export default TabPanel;
