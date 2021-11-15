import {useGetDashboardSummaryQuery} from "../../../types";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import Sales from "../Sales/Sales";
import LastOrders from "../LastOrders/LastOrders";
import SearchTerms from "../SearchTerms/SearchTerms";
import React from "react";

const Summary = () => {
    const {data, loading, error} = useGetDashboardSummaryQuery({});

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
}

export default Summary;
