import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import {withGrid, WithGridProps} from "../Grid/Grid";
import {GetOrderGridQuery, GridOrder, useGetOrderGridQuery} from "../../types";
import {withLayout} from "../Layout/Layout";

const Orders = ({data}: WithGridProps<GetOrderGridQuery>) => {
    return (
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
                    {(data.grid.items as Array<GridOrder>).map(order => (
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
                                <Link to={"/orders/" + order.entity_id}>View</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default withLayout(withGrid<GetOrderGridQuery>(Orders, useGetOrderGridQuery));
