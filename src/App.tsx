import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {AuthProvider} from "./state/context";
import {AppRoutes} from "./AppRoutes";
import {Box, Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider theme={createTheme()}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box sx={{marginTop: 8}}>
                        <BrowserRouter>
                            <AppRoutes />
                        </BrowserRouter>
                    </Box>
                </Container>
            </ThemeProvider>
        </AuthProvider>
    )
}

export default App;
