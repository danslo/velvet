import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import React from "react";
import {DashboardSearchTerm} from "../../types";

const SearchTerms = (searchTerms: Array<DashboardSearchTerm>, caption: string) => (
    <Table sx={{width: 1/4}}>
        <caption>{caption}</caption>
        <TableHead>
            <TableRow>
                <TableCell>Search Term</TableCell>
                <TableCell>Results</TableCell>
                <TableCell>Uses</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {searchTerms.map(search_term => (
                <TableRow>
                    <TableCell>{search_term?.search_term}</TableCell>
                    <TableCell>{search_term?.results}</TableCell>
                    <TableCell>{search_term?.uses}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

export default SearchTerms;
