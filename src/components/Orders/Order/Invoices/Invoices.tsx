import {Invoice, Maybe} from "../../../../types";
import {
    List,
    ListItem,
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

type InvoicesProps = {
    invoices: Array<Maybe<Invoice>>;
}

const Invoices = ({invoices}: InvoicesProps) => (
    <TableContainer component={Paper}>
        <Table>
            <caption>Invoices</caption>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Items</TableCell>
                    <TableCell>Subtotal</TableCell>
                    <TableCell>Tax</TableCell>
                    <TableCell>Shipping</TableCell>
                    <TableCell>Discounts</TableCell>
                    <TableCell>Grand Total</TableCell>
                    <TableCell>Comments</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {invoices.map(invoice => (
                    <TableRow>
                        <TableCell>{invoice!.number}</TableCell>
                        <TableCell>{invoice!.items!.length}</TableCell>
                        <TableCell>
                            <List>
                                {invoice!.items!.map(item => (
                                    <ListItem disablePadding>
                                        <ListItemText primary={item!.product_name} secondary={item!.product_sku}/>
                                    </ListItem>
                                ))}
                            </List>
                        </TableCell>
                        <TableCell>
                            <ListItemText primary={invoice!.total!.subtotal.value}
                                          secondary={invoice!.total!.subtotal.currency}/>
                        </TableCell>
                        <TableCell>
                            <ListItemText primary={invoice!.total!.total_tax.value}
                                          secondary={invoice!.total!.total_tax.currency}/>
                        </TableCell>
                        <TableCell>
                            <ListItemText primary={invoice!.total!.total_shipping.value}
                                          secondary={invoice!.total!.total_shipping.currency}/>
                        </TableCell>
                        <TableCell>
                            <List>
                                {invoice!.total!.discounts?.map(discount => (
                                    <ListItemText primary={discount!.amount.value}
                                                  secondary={discount!.amount.currency}/>
                                ))}
                            </List>
                        </TableCell>
                        <TableCell>
                            <ListItemText primary={invoice!.total!.grand_total.value}
                                          secondary={invoice!.total!.grand_total.currency}/>
                        </TableCell>
                        <TableCell>
                            <List>
                                {(invoice!.comments?.length && invoice!.comments?.map(comment => (
                                    <ListItem disablePadding>
                                        <ListItemText primary={comment!.message} secondary={comment!.timestamp}/>
                                    </ListItem>
                                ))) || "-"}
                            </List>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
)

export default Invoices;
