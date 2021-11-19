import React, {FormEvent, useContext} from "react";
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import {Navigate} from "react-router-dom";
import {useMutation} from "@apollo/client";
import {GenerateAdminTokenDocument} from "../../types";
import {setClientLink} from "../../utils/client";
import {withSnackbar, WithSnackbarProps} from "../../utils/snackbar";
import {AuthContext} from "../../utils/auth";

const Login = ({snackbarShowMessage}: WithSnackbarProps) => {
    const {token, setToken} = useContext(AuthContext);
    const [generateAdminTokenMutation] = useMutation(GenerateAdminTokenDocument);

    const login = async (username: string, password: string) => {
        generateAdminTokenMutation({variables: {username: username, password: password}})
            .then(result => {
                const token = result.data.generateAdminToken;
                localStorage.setItem('token', token);
                setClientLink(token);
                setToken(token);
            })
            .catch(reason => {
                snackbarShowMessage(reason.message);
            });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const username = data.get('username')?.toString();
        const password = data.get('password')?.toString();
        if (username && password) {
            await login(username, password);
        }
    }

    if (token) {
        return <Navigate to="/dashboard"/>;
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{marginTop: 8}}>
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

export default withSnackbar(Login);
