import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import {withGrid, WithGridProps} from "../Grid/Grid";
import {CmsPage, GetCmsPageGridQuery, useGetCmsPageGridQuery} from "../../types";
import {withLayout} from "../Layout/Layout";

const Pages = ({data}: WithGridProps<GetCmsPageGridQuery>) => {
    return (
        <TableContainer component={Paper} sx={{mb: 2}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Identifier</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(data.grid.items as Array<CmsPage>).map(page => (
                        <TableRow>
                            <TableCell>{page.title}</TableCell>
                            <TableCell>{page.identifier}</TableCell>
                            <TableCell>
                                <Link to={"/pages/" + page.identifier}>View</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default withLayout(withGrid<GetCmsPageGridQuery>(Pages, useGetCmsPageGridQuery));
