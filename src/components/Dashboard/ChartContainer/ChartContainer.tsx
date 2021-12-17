import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {Box, FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Tab, Tabs} from "@mui/material";
import React from "react";
import {useGetDashboardSalesQuery} from "../../../types";
import Chart from "../Chart/Chart";
import Totals from "../Totals/Totals";
import TabPanel from "../TabPanel/TabPanel";

const ChartContainer = () => {
    const [period, setPeriod] = React.useState('7d');
    const [tab, setTab] = React.useState(0);
    const {data, loading, error} = useGetDashboardSalesQuery({variables: {period: period}});

    const handleChangePeriod = (event: SelectChangeEvent) => {
        setPeriod(event.target.value as string);
    };

    const handleChangeTab = (event: React.SyntheticEvent, newTab: number) => {
        setTab(newTab);
    };

    return (
        <LoaderHandler loading={loading} error={error}>
            {data && (<Paper sx={{p: 2, mb: 2}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider', mb: 4}}>
                    <Tabs value={tab} onChange={handleChangeTab}>
                        <Tab label="Orders"/>
                        <Tab label="Amounts"/>
                    </Tabs>
                </Box>
                <Box sx={{mb: 2, mx: 1}}>
                    <FormControl component={Paper}>
                        <InputLabel id="period-label">Period</InputLabel>
                        <Select
                            labelId="period-label"
                            value={period}
                            label="Period"
                            onChange={handleChangePeriod}
                        >
                            <MenuItem value="24h">Last 24 Hours</MenuItem>
                            <MenuItem value="7d">Last 7 Days</MenuItem>
                            <MenuItem value="1m">Current Month</MenuItem>
                            <MenuItem value="1y">YTD</MenuItem>
                            <MenuItem value="2y">2YTD</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{py: 2}}>
                    <TabPanel value={tab} index={0}>
                        <Chart chart={data.dashboard.orders_chart}/>
                    </TabPanel>
                    <TabPanel value={tab} index={1}>
                        <Chart chart={data.dashboard.revenue_chart}/>
                    </TabPanel>
                </Box>
                <Totals totals={data.dashboard.totals}/>
            </Paper>)}
        </LoaderHandler>
    );
}

export default ChartContainer;
