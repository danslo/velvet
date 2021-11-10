import React, {FormEvent} from "react";
import {useAuthDispatch, useAuthState} from "../../context/auth.context";
import {login} from "../../actions/auth.actions";
import {Alert, Box, Button, Container, TextField, Typography} from "@mui/material";
import {Navigate, useNavigate} from "react-router-dom";

const Login = () => {
    const {dispatch} = useAuthDispatch();
    const {state} = useAuthState();
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const username = data.get('username')?.toString();
        const password = data.get('password')?.toString();
        if (username && password) {
            login(dispatch, {username, password}, () => navigate("/dashboard"));
        }
    }

    if (state.token) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{marginTop: 8}}>
                {state.errorMessage && <Alert severity="error">{state.errorMessage}</Alert>}
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <Typography component="h1" variant="h5">Sign in</Typography>
                    <TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoFocus/>
                    <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password"
                               autoComplete="current-password"/>
                    <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>Sign In</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default Login;
