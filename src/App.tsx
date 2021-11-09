import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {AuthProvider} from "./state/context";
import {AppRoutes} from "./AppRoutes";

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App;
