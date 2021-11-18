import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ConfigIcon from '@mui/icons-material/Build';
import {Link, useNavigate} from "react-router-dom";
import {useAuthDispatch} from "../../context/auth.context";
import {logout} from "../../actions/auth.actions";
import {AppBar} from "@mui/material";
import CachedIcon from '@mui/icons-material/Cached';
import ListIcon from '@mui/icons-material/List';

export default function Navbar() {
    const {dispatch} = useAuthDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(dispatch).then(() => navigate("/"));
    }

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h5" noWrap component="div" sx={{mr: 2}}>Velvet</Typography>
                <List sx={{display: "flex", flexDirection: "row"}}>
                    <ListItem component={Link} to="/dashboard">
                        <ListItemIcon sx={{minWidth: "20px", color: "white"}}>
                            <DashboardIcon/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem component={Link} to="/configuration">
                        <ListItemIcon sx={{minWidth: "20px", color: "white"}}>
                            <ConfigIcon/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem component={Link} to="/cache">
                        <ListItemIcon sx={{minWidth: "20px", color: "white"}}>
                            <CachedIcon/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem component={Link} to="/indexers">
                        <ListItemIcon sx={{minWidth: "20px", color: "white"}}>
                            <ListIcon/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem component={Link} to="#" onClick={handleLogout}>
                        <ListItemIcon sx={{minWidth: "20px", color: "white"}}>
                            <LogoutIcon/>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Toolbar>
        </AppBar>
    );
}
