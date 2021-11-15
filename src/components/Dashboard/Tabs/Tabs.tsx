import {Box, Paper, Tab, Tabs as MTabs} from "@mui/material";
import React from "react";
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import TabPanel from "../TabPanel/TabPanel";
import Customers from "../Customers/Customers";
import {useGetDashboardTabsQuery} from "../../../types";

const Tabs = () => {
    const [tab, setTab] = React.useState(0);
    const {data, loading, error} = useGetDashboardTabsQuery();

    const handleChangeTab = (event: React.SyntheticEvent, newTab: number) => {
        setTab(newTab);
    };

    return (
        <Paper sx={{p: 2, mb: 2}}>
            <LoaderHandler loading={loading} error={error}>
                {data && (<>
                    <Box sx={{borderBottom: 1, borderColor: 'divider', mb: 2}}>
                        <MTabs value={tab} onChange={handleChangeTab}>
                            <Tab label="New Customers"/>
                            <Tab label="Profitable Customers"/>
                        </MTabs>
                    </Box>
                    <TabPanel value={tab} index={0}>
                        <Customers customers={data.dashboard.customers_newest}/>
                    </TabPanel>
                    <TabPanel value={tab} index={1}>
                        <Customers customers={data.dashboard.customers_most}/>
                    </TabPanel>
                </>)}
            </LoaderHandler>
        </Paper>
    );
}

export default Tabs;
