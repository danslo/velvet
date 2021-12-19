import React, {FunctionComponent} from "react";
import {Box, Toolbar, Typography} from "@mui/material";

type HeaderProps = {
    text: string
}

const Header: FunctionComponent<HeaderProps> = (props) => (
    <Toolbar disableGutters variant="dense">
        <Box display="flex" flexGrow={1}>
            <Typography variant="h5">{props.text}</Typography>
        </Box>
        {props.children}
    </Toolbar>
)

export default Header;
