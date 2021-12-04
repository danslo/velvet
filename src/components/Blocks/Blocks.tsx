import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import {withGrid, WithGridProps} from "../Grid/Grid";
import {CmsBlock, GetCmsBlockGridQuery, useGetCmsBlockGridQuery} from "../../types";
import {withLayout} from "../Layout/Layout";
import {useNavigate} from "react-router-dom";

const Blocks = ({data}: WithGridProps<GetCmsBlockGridQuery>) => {
    const navigate = useNavigate();
    return (
        <TableContainer component={Paper} sx={{mb: 2}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Identifier</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(data.grid.items as Array<CmsBlock>).map(page => (
                        <TableRow hover={true} sx={{cursor: "pointer"}} onClick={() => navigate("/blocks/" + page.identifier)}>
                            <TableCell>{page.title}</TableCell>
                            <TableCell>{page.identifier}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default withLayout(withGrid<GetCmsBlockGridQuery>(Blocks, useGetCmsBlockGridQuery));
