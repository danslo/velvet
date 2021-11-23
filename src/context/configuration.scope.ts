import {Scope} from "../types";
import {createContext, useContext} from "react";

export type OptionalScopeWithoutChildren = Omit<Scope, "children"> | null;

export type ConfigurationScopeContextType = {
    currentScope: OptionalScopeWithoutChildren;
    setCurrentScope: (scope: OptionalScopeWithoutChildren) => void;
}

export const ConfigurationScopeContext = createContext<ConfigurationScopeContextType>({
    currentScope: null,
    setCurrentScope: scope => undefined
})

export const useConfigurationScopeContext = () => useContext(ConfigurationScopeContext);
