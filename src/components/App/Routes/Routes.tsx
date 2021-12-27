import {Route as DOMRoute, Routes as DOMRoutes} from "react-router-dom";
import React from "react";
import routes from "../../../config/routes"
import useAuth from "../../../hooks/auth";

function RoutesWithChildren(children: typeof routes, isLoggedIn: boolean): JSX.Element {
    return (<>
        {children.filter(route => route.is_public || isLoggedIn)
            .map(route => (
                <DOMRoute
                    element={route.component ? route.component({}) : undefined}
                    path={route.path}
                    key={route.path}>
                    {route.children && RoutesWithChildren(route.children, isLoggedIn)}
                </DOMRoute>
            ))}
    </>)
}

export const Routes = () => {
    const {isLoggedIn} = useAuth();
    return (
        <DOMRoutes>{RoutesWithChildren(routes, isLoggedIn)}</DOMRoutes>
    );
}
