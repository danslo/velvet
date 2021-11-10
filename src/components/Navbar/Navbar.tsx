import {AppBar, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";
import {useAuthDispatch} from "../../context/auth.context";
import {logout} from "../../actions/auth.actions";

const Navbar = () => {
    const {dispatch} = useAuthDispatch();

    return (
        <AppBar position="static">
            <Toolbar>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/" onClick={() => {logout(dispatch)}}>Logout</Link>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
