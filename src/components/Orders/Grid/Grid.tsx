import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import {withGrid, WithGridProps} from "../../../hocs/grid";
import {GetOrderGridQuery, useGetOrderGridQuery, VelvetGridOrder} from "../../../types";

const Grid = ({data}: WithGridProps<GetOrderGridQuery>) => {
    const navigate = useNavigate();
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
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(data.grid.items as Array<VelvetGridOrder>).map(order => (
                        <TableRow
                            key={order.entity_id}
                            hover={true}
                            sx={{cursor: "pointer"}}
                            onClick={() => navigate("/orders/" + order.entity_id)}>
                            <TableCell>{order.increment_id}</TableCell>
                            <TableCell>{order.store_name}</TableCell>
                            <TableCell>{order.created_at}</TableCell>
                            <TableCell>{order.billing_name}</TableCell>
                            <TableCell>{order.shipping_name}</TableCell>
                            <TableCell>{order.formatted_grand_total}</TableCell>
                            <TableCell>{order.status}</TableCell>
                            <TableCell>{order.shipping_address}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default withGrid<GetOrderGridQuery>(Grid, useGetOrderGridQuery);
