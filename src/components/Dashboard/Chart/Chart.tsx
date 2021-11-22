import React from "react";
import {DashboardChart} from "../../../types";
import {ArgumentAxis, BarSeries, Chart as DXChart, ValueAxis} from '@devexpress/dx-react-chart-material-ui';

type ChartProps = {
    chart: DashboardChart
};

const Chart = ({chart}: ChartProps) => (
    <DXChart data={chart.points}>
        <ArgumentAxis showGrid/>
        <ValueAxis/>
        <BarSeries valueField="y" argumentField="x"/>
    </DXChart>
);

export default Chart;
