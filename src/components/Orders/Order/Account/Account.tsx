import {OrderViewOrder} from "../../../../types";
import {Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import React from "react";

type AccountProps = {
    caption: string
    order: Partial<OrderViewOrder>
}

const Account = ({caption, order}: AccountProps) => (
    <TableContainer component={Paper}>
        <Table>
            <caption>{caption}</caption>
            <TableBody>
                <TableRow>
                    <TableCell>Guest</TableCell>
                    <TableCell>{order.customer_is_guest ? "Yes" : "No"}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>{order.customer_email}</TableCell>
                </TableRow>
                {order.customer_firstname && (
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>{order.customer_firstname}</TableCell>
                    </TableRow>
                )}
                {order.customer_middlename && (
                    <TableRow>
                        <TableCell>Middle Name</TableCell>
                        <TableCell>{order.customer_middlename}</TableCell>
                    </TableRow>
                )}
                {order.customer_lastname && (
                    <TableRow>
                        <TableCell>Last Name</TableCell>
                        <TableCell>{order.customer_lastname}</TableCell>
                    </TableRow>
                )}
                {order.customer_prefix && (
                    <TableRow>
                        <TableCell>Prefix</TableCell>
                        <TableCell>{order.customer_prefix}</TableCell>
                    </TableRow>
                )}
                {order.customer_suffix && (
                    <TableRow>
                        <TableCell>Suffix</TableCell>
                        <TableCell>{order.customer_suffix}</TableCell>
                    </TableRow>
                )}
                {order.customer_gender && (
                    <TableRow>
                        <TableCell>Gender</TableCell>
                        <TableCell>{order.customer_gender}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    </TableContainer>
);

export default Account;
