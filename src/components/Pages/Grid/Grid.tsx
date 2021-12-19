import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import {withGrid, WithGridProps} from "../../../hocs/grid";
import {GetCmsPageGridQuery, useGetCmsPageGridQuery, VelvetCmsPage} from "../../../types";

const Grid = ({data}: WithGridProps<GetCmsPageGridQuery>) => {
    const navigate = useNavigate();
    return (
        <TableContainer component={Paper} sx={{mb: 2}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Identifier</TableCell>
                        <TableCell>Created</TableCell>
                        <TableCell>Updated</TableCell>
                        <TableCell>Active</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(data.grid.items as Array<VelvetCmsPage>).map(page => (
                        <TableRow
                            key={page.page_id}
                            hover={true}
                            sx={{cursor: "pointer"}}
                            onClick={() => navigate("/pages/" + page.page_id)}>
                            <TableCell>{page.page_id}</TableCell>
                            <TableCell>{page.title}</TableCell>
                            <TableCell>{page.identifier}</TableCell>
                            <TableCell>{page.creation_time}</TableCell>
                            <TableCell>{page.update_time}</TableCell>
                            <TableCell>{page.is_active ? "Yes" : "No"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default withGrid<GetCmsPageGridQuery>(Grid, useGetCmsPageGridQuery);
