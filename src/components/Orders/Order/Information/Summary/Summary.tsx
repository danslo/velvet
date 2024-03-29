import {Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import React from "react";
import {VelvetOrder} from "../../../../../types";

type InformationProps = {
    caption: string
    order: Partial<VelvetOrder>
}

const Summary = ({caption, order}: InformationProps) => (
    <TableContainer component={Paper}>
        <Table>
            <caption>{caption}</caption>
            <TableBody>
                <TableRow>
                    <TableCell>Order Number</TableCell>
                    <TableCell>{order.number}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Order Date</TableCell>
                    <TableCell>{order.order_date}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell>{order.status}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
);

export default Summary;
