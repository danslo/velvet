import {AuthState, initialAuthState} from "./state";
import {createContext, Dispatch} from "react";
import {AuthAction} from "./actions";

export const AuthContext = createContext<{
    state: AuthState;
    dispatch: Dispatch<AuthAction>
}>({
    state: initialAuthState,
    dispatch: () => undefined
})
