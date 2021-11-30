import {
    List,
    ListItemText,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import React from "react";
import {Maybe, OrderItemInterface} from "../../../../../types";

type ItemsProps = {
    caption: string
    items: Array<Maybe<OrderItemInterface>>
}

const Items = ({caption, items}: ItemsProps) => (
    <TableContainer component={Paper}>
        <Table>
            <caption>{caption}</caption>
            <TableHead>
                <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Item Status</TableCell>
                    <TableCell>Qty Ordered</TableCell>
                    <TableCell>Qty Shipped</TableCell>
                    <TableCell>Qty Invoiced</TableCell>
                    <TableCell>Qty Refunded</TableCell>
                    <TableCell>Discounts</TableCell>
                    <TableCell>Price</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {items.map(item => (
                    <TableRow>
                        <TableCell>{item!.product_name}</TableCell>
                        <TableCell>{item!.status}</TableCell>
                        <TableCell>{item!.quantity_ordered}</TableCell>
                        <TableCell>{item!.quantity_shipped}</TableCell>
                        <TableCell>{item!.quantity_invoiced}</TableCell>
                        <TableCell>{item!.quantity_refunded}</TableCell>
                        <TableCell>{item!.discounts && (
                            <List>
                                {item!.discounts.map(discount => (
                                    <ListItemText primary={discount!.amount.value} secondary={discount!.label}/>
                                ))}
                            </List>
                        )}</TableCell>
                        <TableCell>{item!.product_sale_price.value}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
)

export default Items;
