import {useAuthState} from "../../../context/auth.context";
import {Route, Routes as DOMRoutes} from "react-router-dom";
import routes from "../../../config/routes";
import React from "react";

export const Routes = () => {
    const {state} = useAuthState();
    return (
        <DOMRoutes>
            {routes
                .filter(route => !route.is_private || state.token)
                .map(route => (
                    <Route element={route.component({})} path={route.path} key={route.path}>
                        {route.children.map(childRoute =>
                            <Route element={childRoute.component({})} path={childRoute.path} key={childRoute.path}/>
                        )}
                    </Route>
                ))
            }
        </DOMRoutes>
    );
}
