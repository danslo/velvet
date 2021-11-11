import {Table, TableCell, TableHead, TableRow, TableBody} from "@mui/material";
import React from "react";
import {DashboardLastOrder} from "../../types";

const LastOrders = (lastOrders: Array<DashboardLastOrder>, caption: string) => (
    <Table sx={{width: 1/4}}>
        <caption>{caption}</caption>
        <TableHead>
            <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell>Items</TableCell>
                <TableCell>Total</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {lastOrders.map(order => (
                <TableRow>
                    <TableCell>{order?.customer_name}</TableCell>
                    <TableCell>{order?.num_items}</TableCell>
                    <TableCell>{order?.total}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

export default LastOrders;
