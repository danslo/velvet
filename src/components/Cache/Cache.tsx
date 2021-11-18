import {withLayout} from "../Layout/Layout";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import {useCacheTypesQuery} from "../../types";
import LoaderHandler from "../LoaderHandler/LoaderHandler";

const Cache = () => {
    const {data, loading, error} = useCacheTypesQuery();

    return (
        <LoaderHandler loading={loading} error={error}>
            {data && (
                <TableContainer component={Paper} sx={{mb: 2}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Cache Type</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Tags</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.cacheTypes.map(cacheType => (
                                <TableRow>
                                    <TableCell>{cacheType!.cache_type}</TableCell>
                                    <TableCell>{cacheType!.description}</TableCell>
                                    <TableCell>{cacheType!.tags}</TableCell>
                                    <TableCell>{cacheType!.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </LoaderHandler>
    );
}

export default withLayout(Cache);
