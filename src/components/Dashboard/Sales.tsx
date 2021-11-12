import {Table, TableBody, TableCell, TableRow} from "@mui/material";
import React from "react";
import {DashboardSales} from "../../types";

type SalesProps = {
    sales: DashboardSales;
    caption: string;
}

const Sales = ({sales, caption}: SalesProps) => (
    <Table sx={{width: 1/4}}>
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
);

export default Sales;
