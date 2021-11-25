import {withLayout} from "../Layout/Layout";
import {useGetOrderGridQuery} from "../../types";
import LoaderHandler from "../LoaderHandler/LoaderHandler";
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";

const Orders = () => {
    const {data, loading, error} = useGetOrderGridQuery();

    return (
        <LoaderHandler loading={loading} error={error}>
            {data && (
                <>
                    <Box component={Paper} sx={{mb: 2}}>
                        Total orders: {data.orderGrid.total_orders}<br/>
                        Last page number: {data.orderGrid.last_page_number}
                    </Box>
                    <TableContainer component={Paper} sx={{mb: 2}}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Increment ID</TableCell>
                                    <TableCell>Store</TableCell>
                                    <TableCell>Created At</TableCell>
                                    <TableCell>Billing Name</TableCell>
                                    <TableCell>Shipping Name</TableCell>
                                    <TableCell>Grand Total</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Shipping Address</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.orderGrid.orders.map(order => (
                                    <TableRow>
                                        <TableCell>{order.increment_id}</TableCell>
                                        <TableCell>{order.store_name}</TableCell>
                                        <TableCell>{order.created_at}</TableCell>
                                        <TableCell>{order.billing_name}</TableCell>
                                        <TableCell>{order.shipping_name}</TableCell>
                                        <TableCell>{order.grand_total}</TableCell>
                                        <TableCell>{order.status}</TableCell>
                                        <TableCell>{order.shipping_address}</TableCell>
                                        <TableCell>
                                            <Link to={"/orders/" + order.increment_id}>View</Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            )}
        </LoaderHandler>
    );
}

export default withLayout(Orders);
