import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import {DashboardLastOrder, Maybe} from "../../../types";

type LastOrdersProps = {
    lastOrders: Array<Maybe<DashboardLastOrder>>;
    caption: string;
}

const LastOrders = ({lastOrders, caption}: LastOrdersProps) => (
    <TableContainer component={Paper} sx={{mb: 2}}>
        <Table>
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
                        <TableCell>{order!.customer_name}</TableCell>
                        <TableCell>{order!.num_items}</TableCell>
                        <TableCell>{order!.total}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default LastOrders;
