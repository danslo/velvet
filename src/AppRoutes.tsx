import {useAuthState} from "./state/context";
import {Route, Routes} from "react-router-dom";
import routes from "./config/Routes";
import Login from "./components/Login/Login";
import React from "react";

export const AppRoutes = () => {
    const {state} = useAuthState();
    return (
        <Routes>
            {routes.map((route) =>
                <Route path={route.path}
                       key={route.path}
                       element={!route.is_private || state.token ? route.component({}) : <Login />}
                />
            )}
        </Routes>
    );
}
