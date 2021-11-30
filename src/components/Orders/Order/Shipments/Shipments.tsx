import {Maybe, OrderShipment} from "../../../../types";
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

type ShipmentsProps = {
    shipments: Array<Maybe<OrderShipment>>;
}

const Shipments = ({shipments}: ShipmentsProps) => (
    <TableContainer component={Paper}>
        <Table>
            <caption>Shipments</caption>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Items</TableCell>
                    <TableCell>Tracking</TableCell>
                    <TableCell>Comments</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {shipments.map(shipment => (
                    <TableRow>
                        <TableCell>{shipment!.number}</TableCell>
                        <TableCell>{shipment!.items!.length}</TableCell>
                        <TableCell>
                            <List>
                                {shipment!.items!.map(item => (
                                    <ListItem disablePadding>
                                        <ListItemText primary={item!.product_name} secondary={item!.product_sku}/>
                                    </ListItem>
                                ))}
                            </List>
                        </TableCell>
                        <TableCell>
                            <List>
                                {(shipment!.tracking?.length && shipment!.tracking.map(track => (
                                    <ListItem disablePadding>
                                        <ListItemText primary={track!.title} secondary={track!.carrier}/>
                                    </ListItem>
                                ))) || "-"}
                            </List>
                        </TableCell>
                        <TableCell>
                            <List>
                                {(shipment!.comments?.length && shipment!.comments?.map(comment => (
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

export default Shipments;
