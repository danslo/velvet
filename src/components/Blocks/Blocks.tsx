import React from "react";
import Grid from "./Grid/Grid";
import {Button} from "@mui/material";
import {withLayout} from "../../hocs/layout";
import {Link} from "react-router-dom";

const Blocks = () => {
    return (
        <>
            <Button component={Link} to="/blocks/create" variant="contained" color="primary">
                Add Block
            </Button>
            <Grid/>
        </>
    );
}

export default withLayout(Blocks);
