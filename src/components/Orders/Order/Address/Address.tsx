import {Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import React from "react";
import {OrderAddress} from "../../../../types";

type AddressProps = {
    caption: string
    address: OrderAddress
}

const Address = ({caption, address}: AddressProps) => (
    <TableContainer component={Paper}>
        <Table>
            <caption>{caption}</caption>
            <TableBody>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>{address.firstname} {address.middlename} {address.lastname}</TableCell>
                </TableRow>
                {address.company && (
                    <TableRow>
                        <TableCell>Company</TableCell>
                        <TableCell>{address.company}</TableCell>
                    </TableRow>
                )}
                <TableRow>
                    <TableCell>Street</TableCell>
                    <TableCell>{address.street}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>City</TableCell>
                    <TableCell>{address.city}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Postcode</TableCell>
                    <TableCell>{address.postcode}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Region</TableCell>
                    <TableCell>{address.region}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Country</TableCell>
                    <TableCell>{address.country_code}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Phone</TableCell>
                    <TableCell>{address.telephone}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
);


export default Address;
