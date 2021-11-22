import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from "./Routes/Routes";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../../config/theme";
import {AuthProvider} from "../../utils/auth";
import {client} from "../../utils/client";
import {ApolloProvider} from "@apollo/client";

const App = () => (
    <AuthProvider>
        <ApolloProvider client={client}>
            <ThemeProvider theme={createTheme(theme)}>
                <CssBaseline/>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </ThemeProvider>
        </ApolloProvider>
    </AuthProvider>
)

export default App;
