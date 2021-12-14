import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import {withGrid, WithGridProps} from "../../hocs/grid";
import {GetProductGridQuery, useGetProductGridQuery, VelvetGridProduct} from "../../types";
import {withLayout} from "../../hocs/layout";
import {useNavigate} from "react-router-dom";

const Products = ({data}: WithGridProps<GetProductGridQuery>) => {
    const navigate = useNavigate();
    return (
        <TableContainer component={Paper} sx={{mb: 2}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Product ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>SKU</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Visibility</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Quantity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(data.grid.items as Array<VelvetGridProduct>).map(product => (
                        <TableRow
                            key={product.entity_id}
                            hover={true}
                            sx={{cursor: "pointer"}}
                            onClick={() => navigate("/products/" + product.entity_id)}>
                            <TableCell>{product.entity_id}</TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.sku}</TableCell>
                            <TableCell>{product.type_id}</TableCell>
                            <TableCell>{product.status}</TableCell>
                            <TableCell>{product.visibility}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>{product.quantity}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default withLayout(withGrid<GetProductGridQuery>(Products, useGetProductGridQuery));
