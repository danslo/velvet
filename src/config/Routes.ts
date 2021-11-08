import Login from "../components/Login/Login";
import Dashboard from "../components/Dashboard/Dashboard";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import {FC} from "react";

const routes: Array<{
    path: string,
    component: FC,
    is_private: boolean
}> = [
    {
        path: '/',
        component: Login,
        is_private: false
    },
    {
        path: '/dashboard',
        component: Dashboard,
        is_private: true
    },
    {
        path: '/*',
        component: PageNotFound,
        is_private: false
    }
];

export default routes;
