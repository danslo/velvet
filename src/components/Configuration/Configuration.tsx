import {withLayout} from "../Layout/Layout";
import {Grid} from "@mui/material";
import React from "react";
import Tabs from "./Tabs/Tabs";
import Container from "./Container/Container";

const Configuration = () => (
    <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
            <Tabs/>
        </Grid>
        <Grid item xs={12} md={9}>
            <Container/>
        </Grid>
    </Grid>
)

export default withLayout(Configuration);
