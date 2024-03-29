import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import {AppBar, SvgIcon} from "@mui/material";
import menu from "../../config/menu";
import useAuth from "../../hooks/auth";

const Navbar = () => {
    const {logout} = useAuth();
    return (
        <AppBar position="sticky" sx={{overflowX: "scroll"}}>
            <Toolbar>
                <Typography variant="h5" noWrap component="div" sx={{mr: 2}}>Velvet</Typography>
                <List sx={{display: "flex", flexDirection: "row"}}>
                    {menu.map(menuItem => (
                        <ListItem key={menuItem.to} component={Link} to={menuItem.to}>
                            <ListItemIcon sx={{minWidth: "20px", color: "white"}}>
                                <SvgIcon component={menuItem.icon}/>
                            </ListItemIcon>
                        </ListItem>
                    ))}
                    <ListItem component={Link} to="#" onClick={logout}>
                        <ListItemIcon sx={{minWidth: "20px", color: "white"}}>
                            <LogoutIcon/>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
