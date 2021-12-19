import React from "react";
import {withLayout} from "../../hocs/layout";
import Grid from "./Grid/Grid";
import Header from "../Header/Header";

const Orders = () => {
    return (
        <>
            <Header text="Orders"/>
            <Grid/>
        </>
    )
}

export default withLayout(Orders);
