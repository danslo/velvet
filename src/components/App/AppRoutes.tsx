import {useAuthState} from "../../context/auth.context";
import {Route, Routes} from "react-router-dom";
import routes from "../../config/routes";
import React from "react";

export const AppRoutes = () => {
    const {state} = useAuthState();
    return (
        <Routes>
            {routes
                .filter(route => !route.is_private || state.token)
                .map(route =>
                    <Route
                        element={route.component({})}
                        path={route.path}
                        key={route.path} />
                )
            }
        </Routes>
    );
}
