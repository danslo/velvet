import React from "react";
import {Grid} from "@mui/material";
import {withLayout} from "../Layout/Layout";
import Summary from "./Summary/Summary";
import ChartContainer from "./ChartContainer/ChartContainer";
import Tabs from "./Tabs/Tabs";

const Dashboard = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Summary/>
            </Grid>
            <Grid item xs={12} md={8}>
                <ChartContainer/>
                <Tabs/>
            </Grid>
        </Grid>

    );
};

export default withLayout(Dashboard);
