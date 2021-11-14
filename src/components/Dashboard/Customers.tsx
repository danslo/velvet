import {DashboardCustomer, Maybe} from "../../types";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";

type CustomersProps = {
    customers: Array<Maybe<DashboardCustomer>>
}

const Customers = ({customers}: CustomersProps) => (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Customer</TableCell>
                    <TableCell>Orders</TableCell>
                    <TableCell>Average</TableCell>
                    <TableCell>Total</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {customers.map(customer => (
                    <TableRow>
                        <TableCell>{customer!.name}</TableCell>
                        <TableCell>{customer!.orders}</TableCell>
                        <TableCell>{customer!.average}</TableCell>
                        <TableCell>{customer!.total}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
)

export default Customers;
