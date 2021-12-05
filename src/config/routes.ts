import Login from "../components/Login/Login";
import Dashboard from "../components/Dashboard/Dashboard";
import Cache from "../components/Cache/Cache";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import {FunctionComponent} from "react";
import Configuration from "../components/Configuration/Configuration";
import Indexers from "../components/Indexers/Indexers";
import Orders from "../components/Orders/Orders";
import Order from "../components/Orders/Order/Order";
import Pages from "../components/Pages/Pages";
import Blocks from "../components/Blocks/Blocks";
import Customers from "../components/Customers/Customers";

type route = {
    path: string,
    component?: FunctionComponent,
    is_private: boolean,
    children?: Array<route>
};

const routes: Array<route> = [
    {
        path: '/',
        component: Login,
        is_private: false
    },
    {
        path: 'dashboard',
        component: Dashboard,
        is_private: true
    },
    {
        path: 'cache',
        component: Cache,
        is_private: true
    },
    {
        path: 'indexers',
        component: Indexers,
        is_private: true
    },
    {
        path: 'orders',
        is_private: true,
        children: [
            {
                path: ':orderId',
                component: Order,
                is_private: true,
                children: [
                    {
                        path: ':tab',
                        component: Order,
                        is_private: true
                    }
                ]
            },
            {
                path: '',
                component: Orders,
                is_private: true
            }
        ]
    },
    {
        path: 'configuration',
        is_private: true,
        children: [
            {
                path: ':section',
                component: Configuration,
                is_private: true
            },
            {
                path: '',
                component: Configuration,
                is_private: true
            }
        ]
    },
    {
        path: 'pages',
        is_private: true,
        component: Pages
    },
    {
        path: 'blocks',
        is_private: true,
        component: Blocks
    },
    {
        path: 'customers',
        is_private: true,
        component: Customers
    },
    {
        path: '*',
        component: PageNotFound,
        is_private: false
    }
];

export default routes;
