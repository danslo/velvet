import {Route, Routes as DOMRoutes} from "react-router-dom";
import routes from "../../../config/routes";
import React, {useContext} from "react";
import {AuthStateContext} from "../../../utils/auth";

export const Routes = () => {
    const {token} = useContext(AuthStateContext);
    return (
        <DOMRoutes>
            {routes
                .filter(route => !route.is_private || token)
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
