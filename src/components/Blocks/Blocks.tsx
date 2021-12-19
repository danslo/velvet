import React from "react";
import Grid from "./Grid/Grid";
import {Button} from "@mui/material";
import {withLayout} from "../../hocs/layout";
import {Link} from "react-router-dom";
import Header from "../Header/Header";

const Blocks = () => {
    return (
        <>
            <Header text="Blocks">
                <Button component={Link} to="/blocks/create" variant="contained" color="primary">Add Block</Button>
            </Header>
            <Grid/>
        </>
    );
}

export default withLayout(Blocks);
