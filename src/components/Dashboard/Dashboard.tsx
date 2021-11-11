import React from "react";
import {withLayout} from "../Layout/Layout";
import {useGetDashboardDataQuery} from "../../types";
import {Table, TableRow, TableCell, TableBody, Paper, TableHead} from "@mui/material";

const Dashboard = () => {
    const { data, loading, error } = useGetDashboardDataQuery();

    if (error) {
        return <h2>Failed!</h2>;
    }

    return (
        <>
            <Table sx={{width: 1/4}}>
                <caption>Sales</caption>
                <TableBody>
                    <TableRow>
                        <TableCell>Lifetime Sales</TableCell>
                        <TableCell>{data?.dashboard.sales.lifetime_sales}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Average Order</TableCell>
                        <TableCell>{data?.dashboard.sales.average_order}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <Table sx={{width: 1/4}}>
                <caption>Last Orders</caption>
                <TableHead>
                    <TableRow>
                        <TableCell>Customer</TableCell>
                        <TableCell>Items</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.dashboard.last_orders.map(order => (
                        <TableRow>
                            <TableCell>{order?.customer_name}</TableCell>
                            <TableCell>{order?.num_items}</TableCell>
                            <TableCell>{order?.total}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Table sx={{width: 1/4}}>
                <caption>Last Search Terms</caption>
                <TableHead>
                    <TableRow>
                        <TableCell>Search Term</TableCell>
                        <TableCell>Results</TableCell>
                        <TableCell>Uses</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.dashboard.last_search_terms.map(search_term => (
                        <TableRow>
                            <TableCell>{search_term?.search_term}</TableCell>
                            <TableCell>{search_term?.results}</TableCell>
                            <TableCell>{search_term?.uses}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Table sx={{width: 1/4}}>
                <caption>Top Search Terms</caption>
                <TableHead>
                    <TableRow>
                        <TableCell>Search Term</TableCell>
                        <TableCell>Results</TableCell>
                        <TableCell>Uses</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.dashboard.top_search_terms.map(search_term => (
                        <TableRow>
                            <TableCell>{search_term?.search_term}</TableCell>
                            <TableCell>{search_term?.results}</TableCell>
                            <TableCell>{search_term?.uses}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
};

export default withLayout(Dashboard);
