import React from "react";
import {withLayout} from "../../hocs/layout";
import Grid from "./Grid/Grid";
import Header from "../Header/Header";

const Pages = () => {
    return (
        <>
            <Header text="Pages"/>
            <Grid/>
        </>
    );
}

export default withLayout(Pages);
