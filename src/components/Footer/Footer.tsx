import {AppBar, Container, Toolbar, Typography} from "@mui/material";

const Footer = () => (
    <AppBar position="static" sx={{marginTop: "auto"}}>
        <Container maxWidth={false}>
            <Toolbar>
                <Typography variant="body1" color="inherit">Copyright &copy; 2021 Velvet Commerce Inc. All rights
                    reserved.</Typography>
            </Toolbar>
        </Container>
    </AppBar>
);

export default Footer;
