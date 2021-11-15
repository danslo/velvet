import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import {DashboardSearchTerm, Maybe} from "../../../types";

type SearchTermsProps = {
    searchTerms: Array<Maybe<DashboardSearchTerm>>;
    caption: string;
}

const SearchTerms = ({caption, searchTerms}: SearchTermsProps) => (
    <TableContainer component={Paper} sx={{mb: 2}}>
        <Table>
            <caption>{caption}</caption>
            <TableHead>
                <TableRow>
                    <TableCell>Search Term</TableCell>
                    <TableCell>Results</TableCell>
                    <TableCell>Uses</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {searchTerms.map(searchTerm => (
                    <TableRow>
                        <TableCell>{searchTerm!.search_term}</TableCell>
                        <TableCell>{searchTerm!.results}</TableCell>
                        <TableCell>{searchTerm!.uses}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default SearchTerms;
