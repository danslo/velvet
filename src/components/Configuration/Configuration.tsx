import {Grid} from "@mui/material";
import React, {useState} from "react";
import Switcher from "./Switcher/Switcher";
import {OptionalScopeWithoutChildren, ScopeContext} from "../../context/scope";
import Tabs from "./Tabs/Tabs";
import Section from "./Section/Section";
import {withLayout} from "../../hocs/layout";

const Configuration = () => {
    const [currentScope, setCurrentScope] = useState<OptionalScopeWithoutChildren>(null);
    return (
        <ScopeContext.Provider value={{currentScope, setCurrentScope}}>
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
        </ScopeContext.Provider>
    )
}

export default withLayout(Configuration);
