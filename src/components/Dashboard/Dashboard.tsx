import React from "react";
import {withLayout} from "../Layout/Layout";
import {useGetDashboardDataQuery} from "../../types";
import LoaderHandler from "../LoaderHandler/LoaderHandler";
import Sales from "./Sales";
import LastOrders from "./LastOrders";
import SearchTerms from "./SearchTerms";

const Dashboard = () => {
    const { data, loading, error } = useGetDashboardDataQuery();
    return (
        <LoaderHandler loading={loading} error={error}>
            {data && (<>
                <Sales sales={data.dashboard.sales} caption="Sales"/>
                <LastOrders lastOrders={data.dashboard.last_orders} caption="Last Orders"/>
                <SearchTerms searchTerms={data.dashboard.last_search_terms} caption="Last Search Terms"/>
                <SearchTerms searchTerms={data.dashboard.top_search_terms} caption="Top Search Terms"/>
            </>)}
        </LoaderHandler>
    );
};

export default withLayout(Dashboard);
