import {Scope} from "../types";
import {createContext, useContext} from "react";

export type OptionalScopeWithoutChildren = Omit<Scope, "children"> | null;

type ScopeContextType = {
    currentScope: OptionalScopeWithoutChildren;
    setCurrentScope: (scope: OptionalScopeWithoutChildren) => void;
}

export const ScopeContext = createContext<ScopeContextType>({
    currentScope: null,
    setCurrentScope: scope => undefined
})

export const useScopeContext = () => useContext(ScopeContext);
