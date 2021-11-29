import {OrderTotal} from "../../../../types";
import {
    List,
    ListItem,
    ListItemText,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow
} from "@mui/material";
import React from "react";

type TotalsProps = {
    caption: string
    totals: OrderTotal
}

const Totals = ({totals, caption}: TotalsProps) => (
    <TableContainer component={Paper}>
        <Table>
            <caption>{caption}</caption>
            <TableBody>
                <TableRow>
                    <TableCell>Subtotal</TableCell>
                    <TableCell>{totals.subtotal.value}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Discounts</TableCell>
                    <TableCell>
                        <List>
                            <ListItem disablePadding>
                                {totals.discounts && totals.discounts.map(discount => (
                                    <ListItemText sx={{m: 0}} primary={discount!.amount.value}
                                                  secondary={discount!.label}/>
                                ))}
                            </ListItem>
                        </List>

                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Tax</TableCell>
                    <TableCell>{totals.total_tax.value}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Shipping</TableCell>
                    <TableCell>{totals.total_shipping.value}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Grand Total</TableCell>
                    <TableCell>{totals.grand_total.value}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
)

export default Totals;
