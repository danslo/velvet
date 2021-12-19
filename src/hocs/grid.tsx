import React, {useEffect} from "react";
import {TablePagination} from "@mui/material";
import LoaderHandler from "../components/LoaderHandler/LoaderHandler";
import * as Apollo from "@apollo/client";
import {QueryResult} from "@apollo/client/react/types/types";
import {GridOutput} from "../types";

export type WithGridProps<Query> = {
    data: Query
}

type RequiredGridFields = {
    grid: Pick<GridOutput, 'last_page_number' | 'total_items'>
}

export function withGrid<Query extends RequiredGridFields>(
    WrappedComponent: React.ComponentType<WithGridProps<Query>>,
    useGridQuery: (baseOptions?: Apollo.QueryHookOptions<Query, any>) => QueryResult<Query, any>
) {
    return () => {
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
                setPageCount(data.grid.last_page_number);
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
                    onRowsPerPageChange={handleChangeRowsPerPage}/>
                
                <LoaderHandler loading={loading} error={error}>
                    {data && (<WrappedComponent data={data}/>)}
                </LoaderHandler>
            </>
        )
    }
}
