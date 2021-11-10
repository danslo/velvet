import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {AuthProvider} from "../../context/auth.context";
import {AppRoutes} from "./AppRoutes";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../../config/theme";

const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider theme={createTheme(theme)}>
                <CssBaseline />
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </ThemeProvider>
        </AuthProvider>
    )
}

export default App;
