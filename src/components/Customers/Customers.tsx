import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import {withGrid, WithGridProps} from "../../hocs/grid";
import {GetCustomerGridQuery, GridCustomer, useGetCustomerGridQuery} from "../../types";
import {withLayout} from "../../hocs/layout";

const Pages = ({data}: WithGridProps<GetCustomerGridQuery>) => {
    const navigate = useNavigate();
    return (
        <TableContainer component={Paper} sx={{mb: 2}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Created At</TableCell>
                        <TableCell>Website ID</TableCell>
                        <TableCell>Date of Birth</TableCell>
                        <TableCell>Shipping Address</TableCell>
                        <TableCell>Billing Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(data.grid.items as Array<GridCustomer>).map(customer => (
                        <TableRow hover={true} sx={{cursor: "pointer"}}
                                  onClick={() => navigate("/customers/" + customer.entity_id)}>
                            <TableCell>{customer.entity_id}</TableCell>
                            <TableCell>{customer.name}</TableCell>
                            <TableCell>{customer.email}</TableCell>
                            <TableCell>{customer.created_at}</TableCell>
                            <TableCell>{customer.website_id}</TableCell>
                            <TableCell>{customer.dob}</TableCell>
                            <TableCell>{customer.shipping_full}</TableCell>
                            <TableCell>{customer.billing_full}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default withLayout(withGrid<GetCustomerGridQuery>(Pages, useGetCustomerGridQuery));
