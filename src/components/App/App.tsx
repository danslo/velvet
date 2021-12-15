import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from "./Routes/Routes";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../../config/theme";
import {AuthProvider} from "../../context/auth";
import {client} from "../../utils/client";
import {ApolloProvider} from "@apollo/client";
import {LoaderProvider} from "../../context/loader";

const App = () => (
    <AuthProvider>
        <ApolloProvider client={client}>
            <ThemeProvider theme={createTheme(theme)}>
                <LoaderProvider>
                    <CssBaseline/>
                    <BrowserRouter>
                        <Routes/>
                    </BrowserRouter>
                </LoaderProvider>
            </ThemeProvider>
        </ApolloProvider>
    </AuthProvider>
)

export default App;
