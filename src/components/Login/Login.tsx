import React, {FormEvent, useContext} from "react";
import {Alert, Box, Button, Container, TextField, Typography} from "@mui/material";
import {Navigate} from "react-router-dom";
import {AuthStateContext} from "../../utils/auth";
import {useMutation} from "@apollo/client";
import {GenerateAdminTokenDocument} from "../../types";
import {setClientLink} from "../../utils/client";

const Login = () => {
    const {token, setToken} = useContext(AuthStateContext);
    const [generateAdminTokenMutation, {data, error}] = useMutation(GenerateAdminTokenDocument);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const username = data.get('username')?.toString();
        const password = data.get('password')?.toString();
        if (username && password) {
            await generateAdminTokenMutation({variables: {username: username, password: password}});
        }
    }

    if (data) {
        localStorage.setItem('token', data.generateAdminToken);
        setClientLink(data.generateAdminToken);
        setToken(data.generateAdminToken);
        return <Navigate to="/dashboard"/>
    }

    if (token) {
        return <Navigate to="/dashboard"/>;
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{marginTop: 8}}>
                {error && (<Alert severity="error">{error.message}</Alert>)}
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <Typography component="h1" variant="h5">Sign in</Typography>
                    <TextField margin="normal" required fullWidth id="username" label="Username" name="username"
                               autoFocus/>
                    <TextField margin="normal" required fullWidth name="password" label="Password" type="password"
                               id="password"
                               autoComplete="current-password"/>
                    <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>Sign In</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default Login;
