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
import Block from "../components/Blocks/Block/Block";
import Product from "../components/Products/Product/Product";
import Products from "../components/Products/Products";
import Page from "../components/Pages/Page/Page";
import Attributes from "../components/Attributes/Attributes";

type route = {
    path: string,
    component?: FunctionComponent,
    is_public?: boolean,
    children?: Array<route>
};

const routes: Array<route> = [
    {path: '/', component: Login, is_public: true},
    {path: 'dashboard', component: Dashboard},
    {path: 'cache', component: Cache},
    {path: 'indexers', component: Indexers},
    {path: 'customers', component: Customers},
    {path: 'attributes', component: Attributes},
    {path: '*', component: PageNotFound, is_public: true},
    {
        path: 'orders', children: [
            {
                path: ':orderId', component: Order, children: [
                    {path: ':tab', component: Order}
                ]
            },
            {path: '', component: Orders}
        ]
    },
    {
        path: 'configuration', children: [
            {path: ':section', component: Configuration},
            {path: '', component: Configuration}
        ]
    },
    {
        path: 'pages', children: [
            {path: 'create', component: Page},
            {path: ':pageId', component: Page},
            {path: '', component: Pages}
        ]
    },
    {
        path: 'blocks', children: [
            {path: 'create', component: Block},
            {path: ':blockId', component: Block},
            {path: '', component: Blocks}
        ]
    },
    {
        path: 'products', children: [
            {path: ':productId', component: Product},
            {path: '', component: Products}
        ]
    }
];

export default routes;
