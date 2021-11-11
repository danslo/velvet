import React, {Fragment} from "react";
import {withLayout} from "../Layout/Layout";
import {useGetDashboardDataQuery} from "../../types";
import SearchTerms from "./SearchTerms";
import Sales from "./Sales";
import LastOrders from "./LastOrders";

const Dashboard = () => {
    const { data, loading, error } = useGetDashboardDataQuery();

    if (error) {
        return <h2>Failed!</h2>;
    }

    return (
        <Fragment>
            <Sales sales={data?.dashboard.sales} caption="Sales" />
            <LastOrders orders={data?.dashboard.last_orders} caption="Last Orders" />
            <SearchTerms searchTerms={data?.dashboard.last_search_terms} caption="Last Search Terms" />
            <SearchTerms searchTerms={data?.dashboard.top_search_terms} caption="Top Search Terms" />
        </Fragment>
    )
};

export default withLayout(Dashboard);
