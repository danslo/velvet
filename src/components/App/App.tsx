import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from "./Routes/Routes";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../../config/theme";
import {AuthProvider} from "../../utils/auth";

const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider theme={createTheme(theme)}>
                <CssBaseline/>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </ThemeProvider>
        </AuthProvider>
    )
}

export default App;
