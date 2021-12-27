import React from "react";
import Header from "../Header/Header";
import Grid from "./Grid/Grid";
import {withLayout} from "../../hocs/layout";

const Customers = () => (
    <>
        <Header text="Customers"/>
        <Grid/>
    </>
);

export default withLayout(Customers);
