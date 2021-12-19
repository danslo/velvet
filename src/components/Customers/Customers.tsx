import React from "react";
import Header from "../Header/Header";
import Grid from "./Grid/Customers";
import {withLayout} from "../../hocs/layout";

const Customers = () => {
    return (
        <>
            <Header text="Customers"/>
            <Grid/>
        </>
    );
}

export default withLayout(Customers);
