import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import {withGrid, WithGridProps} from "../../../hocs/grid";
import {GetCmsBlockGridQuery, useGetCmsBlockGridQuery, VelvetCmsBlock} from "../../../types";
import {useNavigate} from "react-router-dom";

const Grid = ({data}: WithGridProps<GetCmsBlockGridQuery>) => {
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
                    {(data.grid.items as Array<VelvetCmsBlock>).map(block => (
                        <TableRow
                            key={block.block_id}
                            hover={true} sx={{cursor: "pointer"}}
                            onClick={() => navigate("/blocks/" + block.block_id)}>
                            <TableCell>{block.block_id}</TableCell>
                            <TableCell>{block.title}</TableCell>
                            <TableCell>{block.identifier}</TableCell>
                            <TableCell>{block.creation_time}</TableCell>
                            <TableCell>{block.update_time}</TableCell>
                            <TableCell>{block.is_active ? "Yes" : "No"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default withGrid<GetCmsBlockGridQuery>(Grid, useGetCmsBlockGridQuery);
