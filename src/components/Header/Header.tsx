import React, {FunctionComponent} from "react";
import {Box, Toolbar, Typography} from "@mui/material";

type HeaderProps = {
    text: string
}

const Header: FunctionComponent<HeaderProps> = (props) => (
    <Toolbar disableGutters variant="dense" sx={{mb: 2}}>
        <Box display="flex" flexGrow={1}>
            <Typography variant="h5">{props.text}</Typography>
        </Box>
        <Box>{props.children}</Box>
    </Toolbar>
)

export default Header;
