import {Route as DOMRoute, Routes as DOMRoutes} from "react-router-dom";
import React, {useContext} from "react";
import {AuthContext} from "../../../context/auth";
import routes from "../../../config/routes"

function RoutesWithChildren(children: typeof routes, token: string | null): JSX.Element {
    return (<>
        {children.filter(route => route.is_public || token)
            .map(route => (
                <DOMRoute
                    element={route.component ? route.component({}) : undefined}
                    path={route.path}
                    key={route.path}>
                    {route.children && RoutesWithChildren(route.children, token)}
                </DOMRoute>
            ))}
    </>)
}

export const Routes = () => {
    const {token} = useContext(AuthContext);
    return (
        <DOMRoutes>{RoutesWithChildren(routes, token)}</DOMRoutes>
    );
}
