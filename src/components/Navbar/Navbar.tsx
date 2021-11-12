import {AppBar, Button, Toolbar} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {useAuthDispatch} from "../../context/auth.context";
import {logout} from "../../actions/auth.actions";

const Navbar = () => {
    const {dispatch} = useAuthDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(dispatch).then(() => navigate("/"));
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Button>
                    <Link to="/dashboard">Dashboard</Link>
                </Button>
                <Button>
                    <Link to="/" onClick={handleLogout}>Logout</Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
