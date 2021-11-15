import {Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import React from "react";
import {DashboardSales} from "../../../types";

type SalesProps = {
    sales: DashboardSales;
    caption: string;
}

const Sales = ({sales, caption}: SalesProps) => (
    <TableContainer component={Paper} sx={{mb: 2}}>
        <Table>
            <caption>{caption}</caption>
            <TableBody>
                <TableRow>
                    <TableCell>Lifetime Sales</TableCell>
                    <TableCell>{sales.lifetime_sales}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Average Order</TableCell>
                    <TableCell>{sales.average_order}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
);

export default Sales;
