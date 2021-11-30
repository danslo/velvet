import {Route, Routes as DOMRoutes} from "react-router-dom";
import routes from "../../../config/routes";
import React, {useContext} from "react";
import {AuthContext} from "../../../utils/auth";

export const Routes = () => {
    const {token} = useContext(AuthContext);
    return (
        <DOMRoutes>
            {routes
                .filter(route => !route.is_private || token)
                .map(route => (
                    <Route element={route.component ? route.component({}) : undefined} path={route.path}
                           key={route.path}>
                        {route.children?.map(child => (
                            <Route element={child.component ? child.component({}) : undefined} path={child.path}
                                   key={child.path}>
                                {child.children?.map(grandchild => (
                                    <Route element={grandchild.component ? grandchild.component({}) : undefined}
                                           path={grandchild.path}
                                           key={grandchild.path}/>
                                ))}
                            </Route>
                        ))}
                    </Route>
                ))
            }
        </DOMRoutes>
    );
}
