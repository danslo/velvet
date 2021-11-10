import {AuthState, initialAuthState} from "../state/auth.state";
import {createContext, Dispatch, FunctionComponent, useContext, useReducer} from "react";
import {AuthAction} from "../actions/auth.actions";
import {authReducer} from "../reducers/auth.reducers";

const AuthStateContext = createContext<{ state: AuthState }>({
    state: initialAuthState
})

const AuthDispatchContext = createContext<{ dispatch: Dispatch<AuthAction> }>({
    dispatch: () => undefined
})

export const AuthProvider: FunctionComponent<{}> = (props) => {
    const [state, dispatch] = useReducer(authReducer, initialAuthState);
    return (
        <AuthStateContext.Provider value={{state}}>
            <AuthDispatchContext.Provider value={{dispatch}}>
                {props.children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
}

export function useAuthState() {
    const context = useContext(AuthStateContext);
    if (context === undefined) {
        throw new Error("useAuthState must be used within an AuthProvider");
    }

    return context;
}

export function useAuthDispatch() {
    const context = useContext(AuthDispatchContext);
    if (context === undefined) {
        throw new Error("useAuthDispatch must be used within an AuthProvider");
    }

    return context;
}
