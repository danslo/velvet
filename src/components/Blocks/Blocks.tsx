import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import {withGrid, WithGridProps} from "../../hocs/grid";
import {GetCmsBlockGridQuery, GridCmsBlock, useGetCmsBlockGridQuery} from "../../types";
import {withLayout} from "../../hocs/layout";
import {useNavigate} from "react-router-dom";

const Blocks = ({data}: WithGridProps<GetCmsBlockGridQuery>) => {
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
                    {(data.grid.items as Array<GridCmsBlock>).map(block => (
                        <TableRow hover={true} sx={{cursor: "pointer"}}
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

export default withLayout(withGrid<GetCmsBlockGridQuery>(Blocks, useGetCmsBlockGridQuery));
