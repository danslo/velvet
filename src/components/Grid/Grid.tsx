import React, {useEffect} from "react";
import * as Apollo from "@apollo/client";
import {QueryResult} from "react-apollo";
import {GridInput, GridOrder, GridOutput, Scalars} from "../../types";
import {TablePagination} from "@mui/material";
import LoaderHandler from "../LoaderHandler/LoaderHandler";

type GridQueryHook<Q, GridInput> =
    (baseOptions?: Apollo.QueryHookOptions<Q, GridInput>) => QueryResult<Q, GridInput>;

export type TypedGridOutput<T> = {
    items: Array<T>;
    last_page_number: Scalars['Int'];
    total_items: Scalars['Int'];
};

export function withGrid<Q extends GridOutput>(WrappedComponent: React.ComponentType<{output: TypedGridOutput<GridOrder>}>) {
    return (useGridQuery: GridQueryHook<Q, GridInput>) => {
        const [page, setPage] = React.useState(0);
        const [rowsPerPage, setRowsPerPage] = React.useState(10);
        const [pageCount, setPageCount] = React.useState(100);

        const {data, loading, error} = useGridQuery({
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

        useEffect(() => {
            if (data) {
                setPageCount(data.last_page_number);
            }
        }, [data]);

        return (
            <>
                <TablePagination
                    component="div"
                    count={pageCount}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                <LoaderHandler loading={loading} error={error}>
                    {data && (
                        <WrappedComponent data={data} />
                    )}
                </LoaderHandler>
            </>
        )
    }
}
