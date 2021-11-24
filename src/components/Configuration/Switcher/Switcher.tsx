import * as React from 'react';
import Button from '@mui/material/Button';
import LoaderHandler from "../../LoaderHandler/LoaderHandler";
import {useGetConfigurationScopesQuery} from "../../../types";
import {Menu, MenuItem} from "@mui/material";
import {OptionalScopeWithoutChildren, useConfigurationScopeContext} from "../../../context/configuration.scope";


const Switcher = () => {
    const {currentScope, setCurrentScope} = useConfigurationScopeContext();
    const {data, loading, error} = useGetConfigurationScopesQuery();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = (scope: OptionalScopeWithoutChildren) => {
        setAnchorEl(null);
        setCurrentScope(scope);
    }

    return (
        <LoaderHandler loading={loading} error={error}>
            {data && (
                <>
                    <Button onClick={handleClick}>
                        Scope: {currentScope ? currentScope.name : 'Default'}
                    </Button>
                    <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
                        {data.configurationScopes.map(def => (
                            <div>
                                <MenuItem onClick={() => handleClose(null)}>{def.name}</MenuItem>
                                {def.children.map(website => (
                                    <div>
                                        <MenuItem onClick={() => handleClose(website)}
                                                  disabled={website.disabled}>&nbsp;{website.name}</MenuItem>
                                        {website.children.map(group => (
                                            <div>
                                                <MenuItem onClick={() => handleClose(group)}
                                                          disabled={group.disabled}>&nbsp;&nbsp;{group.name}</MenuItem>
                                                {group.children.map(store => (
                                                    <MenuItem
                                                        onClick={() => handleClose(store)}
                                                        disabled={store.disabled}>&nbsp;&nbsp;&nbsp;{store.name}</MenuItem>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Menu>
                </>
            )}
        </LoaderHandler>
    )
}

export default Switcher;