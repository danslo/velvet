import {withLayout} from "../Layout/Layout";
import {useGetOrderGridQuery} from "../../types";
import LoaderHandler from "../LoaderHandler/LoaderHandler";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";

const Orders = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [pageCount, setPageCount] = React.useState(1);
    const {data, loading, error} = useGetOrderGridQuery({
        variables: {
            page_size: rowsPerPage,
            page_number: page + 1
        }
    });

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <LoaderHandler loading={loading} error={error}>
            {data && (
                <>
                    <TablePagination
                        component="div"
                        count={data.orderGrid.last_page_number}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                    <TableContainer component={Paper} sx={{mb: 2}}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Increment ID</TableCell>
                                    <TableCell>Store</TableCell>
                                    <TableCell>Created At</TableCell>
                                    <TableCell>Billing Name</TableCell>
                                    <TableCell>Shipping Name</TableCell>
                                    <TableCell>Grand Total</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Shipping Address</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.orderGrid.orders.map(order => (
                                    <TableRow>
                                        <TableCell>{order.increment_id}</TableCell>
                                        <TableCell>{order.store_name}</TableCell>
                                        <TableCell>{order.created_at}</TableCell>
                                        <TableCell>{order.billing_name}</TableCell>
                                        <TableCell>{order.shipping_name}</TableCell>
                                        <TableCell>{order.grand_total}</TableCell>
                                        <TableCell>{order.status}</TableCell>
                                        <TableCell>{order.shipping_address}</TableCell>
                                        <TableCell>
                                            <Link to={"/orders/" + order.increment_id}>View</Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            )}
        </LoaderHandler>
    );
}

export default withLayout(Orders);
