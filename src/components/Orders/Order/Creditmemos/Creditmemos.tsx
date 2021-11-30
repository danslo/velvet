import {CreditMemo, Maybe} from "../../../../types";
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

type CreditmemosProps = {
    creditmemos: Array<Maybe<CreditMemo>>;
}

const Creditmemos = ({creditmemos}: CreditmemosProps) => (
    <TableContainer component={Paper}>
        <Table>
            <caption>Credit Memos</caption>
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
                {creditmemos.map(creditmemo => (
                    <TableRow>
                        <TableCell>{creditmemo!.number}</TableCell>
                        <TableCell>{creditmemo!.items!.length}</TableCell>
                        <TableCell>
                            <List>
                                {creditmemo!.items!.map(item => (
                                    <ListItem disablePadding>
                                        <ListItemText primary={item!.product_name} secondary={item!.product_sku}/>
                                    </ListItem>
                                ))}
                            </List>
                        </TableCell>
                        <TableCell>
                            <ListItemText primary={creditmemo!.total!.subtotal.value}
                                          secondary={creditmemo!.total!.subtotal.currency}/>
                        </TableCell>
                        <TableCell>
                            <ListItemText primary={creditmemo!.total!.total_tax.value}
                                          secondary={creditmemo!.total!.total_tax.currency}/>
                        </TableCell>
                        <TableCell>
                            <ListItemText primary={creditmemo!.total!.total_shipping.value}
                                          secondary={creditmemo!.total!.total_shipping.currency}/>
                        </TableCell>
                        <TableCell>
                            <List>
                                {creditmemo!.total!.discounts?.map(discount => (
                                    <ListItemText primary={discount!.amount.value}
                                                  secondary={discount!.amount.currency}/>
                                ))}
                            </List>
                        </TableCell>
                        <TableCell>
                            <ListItemText primary={creditmemo!.total!.grand_total.value}
                                          secondary={creditmemo!.total!.grand_total.currency}/>
                        </TableCell>
                        <TableCell>
                            <List>
                                {(creditmemo!.comments?.length && creditmemo!.comments?.map(comment => (
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

export default Creditmemos;
