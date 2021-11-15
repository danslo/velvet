import {withLayout} from "../Layout/Layout";
import {Grid} from "@mui/material";
import React from "react";
import Tabs from "./Tabs";

const Configuration = () => (
    <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
            <Tabs/>
        </Grid>
        <Grid item xs={12} md={9}>
            Content
        </Grid>
    </Grid>
)

export default withLayout(Configuration);
