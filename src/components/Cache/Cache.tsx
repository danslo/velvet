import {withLayout} from "../Layout/Layout";
import {Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";
import {useGetCacheTypesQuery} from "../../types";
import LoaderHandler from "../LoaderHandler/LoaderHandler";

const Cache = () => {
    const {data, loading, error} = useGetCacheTypesQuery();
    const [contextMenu, setContextMenu] = React.useState<{
        mouseX: number;
        mouseY: number;
        type: string;
    } | null>(null);

    const handleContextMenu = (event: React.MouseEvent, cacheType: string) => {
        event.preventDefault();

        setContextMenu(
            contextMenu === null ? {
                mouseX: event.clientX - 2,
                mouseY: event.clientY - 4,
                type: cacheType
            } : null,
        );
    };

    const handleClose = () => {
        setContextMenu(null);
    };

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
                                <TableRow hover={true} onClick={(event: React.MouseEvent) => handleContextMenu(event, cacheType.cache_type)} sx={{cursor: "pointer"}}>
                                    <TableCell>{cacheType.cache_type}</TableCell>
                                    <TableCell>{cacheType.description}</TableCell>
                                    <TableCell>{cacheType.tags}</TableCell>
                                    <TableCell>{cacheType.status}</TableCell>
                                </TableRow>
                            ))}
                            <Menu
                                open={contextMenu !== null}
                                onClose={handleClose}
                                anchorReference="anchorPosition"
                                anchorPosition={contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined}>
                                <MenuItem onClick={handleClose}>Enable</MenuItem>
                                <MenuItem onClick={handleClose}>Disable</MenuItem>
                            </Menu>
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </LoaderHandler>
    );
}

export default withLayout(Cache);
