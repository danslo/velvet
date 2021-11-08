import React, {useReducer} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from "./config/Routes";
import {authReducer} from "./state/reducer";
import {initialAuthState} from "./state/state";
import {AuthContext} from "./state/context";

const App: React.FC = () => {
    const [state, dispatch] = useReducer(authReducer, initialAuthState);

    const AppRoutes = () =>
        <Routes>
            {routes.map((route) =>
                <Route path={route.path} key={route.path} element={route.component({})} />
            )}
        </Routes>

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
