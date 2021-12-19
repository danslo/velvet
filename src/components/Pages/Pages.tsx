import React from "react";
import {withLayout} from "../../hocs/layout";
import Grid from "./Grid/Grid";
import Header from "../Header/Header";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const Pages = () => {
    return (
        <>
            <Header text="Pages">
                <Button component={Link} to="/pages/create" variant="contained" color="primary">Add Page</Button>
            </Header>
            <Grid/>
        </>
    );
}

export default withLayout(Pages);
