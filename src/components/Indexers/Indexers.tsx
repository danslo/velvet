import {withLayout} from "../../hocs/layout";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import {useGetIndexersQuery} from "../../types";
import LoaderHandler from "../LoaderHandler/LoaderHandler";
import Header from "../Header/Header";

const Indexers = () => {
    const {data, loading, error} = useGetIndexersQuery();

    return (
        <LoaderHandler loading={loading} error={error}>
            {data && (
                <>
                    <Header text="Index Management"/>
                    <TableContainer component={Paper} sx={{mb: 2}}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Indexer</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Mode</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Schedule Status</TableCell>
                                    <TableCell>Updated</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.indexers.map(index => (
                                    <TableRow hover={true} key={index.title}>
                                        <TableCell>{index.title}</TableCell>
                                        <TableCell>{index.description}</TableCell>
                                        <TableCell>{index.is_scheduled ? "Update on Schedule" : "Update on Save"}</TableCell>
                                        <TableCell sx={{textTransform: "capitalize"}}>{index.status}</TableCell>
                                        <TableCell
                                            dangerouslySetInnerHTML={{__html: index.schedule_status}}></TableCell>
                                        <TableCell>{index.updated}</TableCell>
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

export default withLayout(Indexers);
