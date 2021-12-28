import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import {withGrid, WithGridProps} from "../../../hocs/grid";
import {GetProductAttributeGridQuery, useGetProductAttributeGridQuery, VelvetCatalogAttribute} from "../../../types";
import {useNavigate} from "react-router-dom";

const Grid = ({data}: WithGridProps<GetProductAttributeGridQuery>) => {
    const navigate = useNavigate();
    return (
        <TableContainer component={Paper} sx={{mb: 2}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Code</TableCell>
                        <TableCell>Label</TableCell>
                        <TableCell>Required</TableCell>
                        <TableCell>System</TableCell>
                        <TableCell>Visible</TableCell>
                        <TableCell>Searchable</TableCell>
                        <TableCell>Filterable</TableCell>
                        <TableCell>Comparable</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(data.grid.items as Array<VelvetCatalogAttribute>).map(attribute => (
                        <TableRow
                            key={attribute.attribute_id}
                            hover={true}
                            sx={{cursor: "pointer"}}
                            onClick={() => navigate("/attributes/" + attribute.attribute_id)}>
                            <TableCell>{attribute.attribute_id}</TableCell>
                            <TableCell>{attribute.attribute_code}</TableCell>
                            <TableCell>{attribute.frontend_label}</TableCell>
                            <TableCell>{attribute.is_required ? "Yes" : "No"}</TableCell>
                            <TableCell>{!attribute.is_user_defined ? "Yes" : "No"}</TableCell>
                            <TableCell>{attribute.is_visible ? "Yes" : "No"}</TableCell>
                            <TableCell>{attribute.is_searchable ? "Yes" : "No"}</TableCell>
                            <TableCell>{attribute.is_filterable ? "Yes" : "No"}</TableCell>
                            <TableCell>{attribute.is_comparable ? "Yes" : "No"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default withGrid<GetProductAttributeGridQuery>(Grid, useGetProductAttributeGridQuery);
