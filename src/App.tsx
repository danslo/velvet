import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {AuthProvider} from "./context/auth.context";
import {AppRoutes} from "./AppRoutes";
import {createTheme, ThemeProvider} from "@mui/material";

const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider theme={createTheme()}>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </ThemeProvider>
        </AuthProvider>
    )
}

export default App;
