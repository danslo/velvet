import {Grid} from "@mui/material";
import React, {useState} from "react";
import Switcher from "./Switcher/Switcher";
import {ConfigurationScopeContext, OptionalScopeWithoutChildren} from "../../context/configuration.scope";
import Tabs from "./Tabs/Tabs";
import Section from "./Section/Section";
import {withLayout} from "../Layout/Layout";

const Configuration = () => {
    const [currentScope, setCurrentScope] = useState<OptionalScopeWithoutChildren>(null);
    return (
        <ConfigurationScopeContext.Provider value={{currentScope, setCurrentScope}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Switcher/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Tabs/>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Section/>
                </Grid>
            </Grid>
        </ConfigurationScopeContext.Provider>
    )
}

export default withLayout(Configuration);
