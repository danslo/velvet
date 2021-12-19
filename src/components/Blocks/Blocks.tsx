import React from "react";
import Grid from "./Grid/Grid";
import {Box, Button, Toolbar, Typography} from "@mui/material";
import {withLayout} from "../../hocs/layout";
import {Link} from "react-router-dom";

const Blocks = () => {
    return (
        <>
            <Toolbar disableGutters variant="dense">
                <Box display="flex" flexGrow={1}>
                    <Typography variant="h5">Blocks</Typography>
                </Box>
                <Button component={Link} to="/blocks/create" variant="contained" color="primary">Add Block</Button>
            </Toolbar>
            <Grid/>
        </>
    );
}

export default withLayout(Blocks);
