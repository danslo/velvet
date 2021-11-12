import React from "react";
import {withLayout} from "../Layout/Layout";
import {useGetDashboardDataQuery} from "../../types";
import LoaderHandler from "../LoaderHandler/LoaderHandler";
import Sales from "./Sales";
import LastOrders from "./LastOrders";
import SearchTerms from "./SearchTerms";
import {Grid, Paper} from "@mui/material";

const Dashboard = () => {
    const {data, loading, error} = useGetDashboardDataQuery();
    return (
        <LoaderHandler loading={loading} error={error}>
            {data && (<>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Sales sales={data.dashboard.sales} caption="Sales"/>
                        <LastOrders lastOrders={data.dashboard.last_orders} caption="Last Orders"/>
                        <SearchTerms searchTerms={data.dashboard.last_search_terms} caption="Last Search Terms"/>
                        <SearchTerms searchTerms={data.dashboard.top_search_terms} caption="Top Search Terms"/>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Paper sx={{p: 2, mb: 2}}>Graphs!</Paper>
                        <Paper sx={{p: 2}}>Store stats!</Paper>
                    </Grid>
                </Grid>
            </>)}
        </LoaderHandler>
    );
};

export default withLayout(Dashboard);
