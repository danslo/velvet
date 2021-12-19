import React from "react";
import {withLayout} from "../../hocs/layout";
import Grid from "./Grid/Grid";
import Header from "../Header/Header";

const Products = () => {
    return (
        <>
            <Header text="Products"/>
            <Grid/>
        </>
    );
}

export default withLayout(Products);
