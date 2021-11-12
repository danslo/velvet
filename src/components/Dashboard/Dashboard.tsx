import React from "react";
import {withLayout} from "../Layout/Layout";
import {useGetDashboardDataQuery} from "../../types";
import Loader from "../Loader/Loader";
import Sales from "./Sales";
import LastOrders from "./LastOrders";
import SearchTerms from "./SearchTerms";

const Dashboard = () => {
    const { data, loading, error } = useGetDashboardDataQuery();
    return (
        <Loader data={data} loading={loading} error={error}>
            <Sales sales={data?.dashboard.sales} caption="Sales"/>
            <LastOrders lastOrders={data?.dashboard.last_orders} caption="Last Orders"/>
            <SearchTerms searchTerms={data?.dashboard.last_search_terms} caption="Last Search Terms"/>
            <SearchTerms searchTerms={data?.dashboard.top_search_terms} caption="Top Search Terms"/>
        </Loader>
    );
};

export default withLayout(Dashboard);
