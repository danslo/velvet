import Login from "../components/Login/Login";
import Dashboard from "../components/Dashboard/Dashboard";
import Cache from "../components/Cache/Cache";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import {FunctionComponent} from "react";
import Configuration from "../components/Configuration/Configuration";
import Indexers from "../components/Indexers/Indexers";

type route = {
    path: string,
    component: FunctionComponent,
    is_private: boolean,
    children: Array<route>
};

const routes: Array<route> = [
    {
        path: '/',
        component: Login,
        is_private: false,
        children: []
    },
    {
        path: '/dashboard',
        component: Dashboard,
        is_private: true,
        children: []
    },
    {
        path: '/cache',
        component: Cache,
        is_private: true,
        children: []
    },
    {
        path: '/indexers',
        component: Indexers,
        is_private: true,
        children: []
    },
    {
        path: '/configuration',
        component: Configuration,
        is_private: true,
        children: [
            {
                path: ':section',
                component: Configuration,
                is_private: true,
                children: []
            }
        ]
    },
    {
        path: '/*',
        component: PageNotFound,
        is_private: false,
        children: []
    }
];

export default routes;
