import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import {withGrid, WithGridProps} from "../../hocs/grid";
import {CmsPage, GetCmsPageGridQuery, useGetCmsPageGridQuery} from "../../types";
import {withLayout} from "../../hocs/layout";

const Pages = ({data}: WithGridProps<GetCmsPageGridQuery>) => {
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
                    {(data.grid.items as Array<CmsPage>).map(page => (
                        <TableRow hover={true} sx={{cursor: "pointer"}}
                                  onClick={() => navigate("/pages/" + page.identifier)}>
                            <TableCell>{page.title}</TableCell>
                            <TableCell>{page.identifier}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default withLayout(withGrid<GetCmsPageGridQuery>(Pages, useGetCmsPageGridQuery));
