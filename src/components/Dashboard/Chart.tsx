import {Paper} from "@mui/material";
import React from "react";
import {DashboardChart} from "../../types";

type ChartProps = {
    chart: DashboardChart
}

const Chart = ({chart}: ChartProps) => {

    return (
        <Paper sx={{p: 2, mb: 2}}>
            <h3>{chart.label}</h3>
        </Paper>
    )
}

export default Chart;
