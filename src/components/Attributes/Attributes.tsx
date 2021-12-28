import Header from "../Header/Header";
import {withLayout} from "../../hocs/layout";
import React from "react";
import Grid from "./Grid/Grid";

const Attributes = () => (
    <>
        <Header text="Attributes"/>
        <Grid/>
    </>
)

export default withLayout(Attributes);
