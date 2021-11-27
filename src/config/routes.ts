import Login from "../components/Login/Login";
import Dashboard from "../components/Dashboard/Dashboard";
import Cache from "../components/Cache/Cache";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import {FunctionComponent} from "react";
import Configuration from "../components/Configuration/Configuration";
import Indexers from "../components/Indexers/Indexers";
import Orders from "../components/Orders/Orders";
import View from "../components/Orders/View/View";

type route = {
    path: string,
    component: FunctionComponent,
    is_private: boolean
};

const routes: Array<route> = [
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
        path: '/cache',
        component: Cache,
        is_private: true
    },
    {
        path: '/indexers',
        component: Indexers,
        is_private: true
    },
    {
        path: '/orders/:orderId',
        component: View,
        is_private: true
    },
    {
        path: '/orders',
        component: Orders,
        is_private: true
    },
    {
        path: '/configuration/:section',
        component: Configuration,
        is_private: true
    },
    {
        path: '/configuration',
        component: Configuration,
        is_private: true
    },
    {
        path: '/*',
        component: PageNotFound,
        is_private: false
    }
];

export default routes;
