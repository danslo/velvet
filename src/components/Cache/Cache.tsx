import {withLayout} from "../Layout/Layout";
import {Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React, {useState} from "react";
import {useCleanCacheMutation, useGetCacheTypesQuery, useToggleCacheMutation} from "../../types";
import LoaderHandler from "../LoaderHandler/LoaderHandler";
import {withSnackbar, WithSnackbarProps} from "../../utils/snackbar";

const Cache = ({snackbarShowMessage}: WithSnackbarProps) => {
    const [toggleCacheMutation] = useToggleCacheMutation({refetchQueries: ['getCacheTypes']});
    const [cleanCacheMutation] = useCleanCacheMutation();
    const {data, loading, error} = useGetCacheTypesQuery();
    const [contextMenu, setContextMenu] = useState<{
        mouseX: number;
        mouseY: number;
        cacheId: string;
    } | null>(null);

    const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault();

        setContextMenu(
            contextMenu === null ? {
                mouseX: event.clientX - 2,
                mouseY: event.clientY - 4,
                cacheId: event.currentTarget.id
            } : null,
        );
    }

    const handleClose = () => {
        setContextMenu(null);
    }

    const toggleCache = (enable: boolean) => {
        toggleCacheMutation({
            variables: {
                cache_id: contextMenu!.cacheId,
                enable: enable
            }
        }).then((result) => {
            if (result.data?.toggleCache) {
                snackbarShowMessage("Cache was successfully " + (enable ? "enabled" : "disabled") + ".");
            }
        });
        handleClose();
    }

    const cleanCache = () => {
        cleanCacheMutation({
            variables: {
                cache_id: contextMenu!.cacheId
            }
        }).then((result) => {
            if (result.data?.cleanCache) {
                snackbarShowMessage("Cache was successfully cleaned.");
            }
        });
        handleClose();
    }

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
                                <TableRow id={cacheType.id} hover={true} onClick={handleContextMenu}
                                          sx={{cursor: "pointer"}}>
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
                                anchorPosition={contextMenu !== null ? {
                                    top: contextMenu.mouseY,
                                    left: contextMenu.mouseX
                                } : undefined}>
                                <MenuItem onClick={() => toggleCache(true)}>Enable</MenuItem>
                                <MenuItem onClick={() => toggleCache(false)}>Disable</MenuItem>
                                <MenuItem onClick={cleanCache}>Clean</MenuItem>
                            </Menu>
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </LoaderHandler>
    );
}

export default withSnackbar(withLayout(Cache));
