import {AuthState, initialAuthState} from "./state";
import {createContext, Dispatch, FunctionComponent, useContext, useReducer} from "react";
import {AuthAction} from "./actions";
import {authReducer} from "./reducer";

export const AuthContext = createContext<{
    state: AuthState;
    dispatch: Dispatch<AuthAction>
}>({
    state: initialAuthState,
    dispatch: () => undefined
})

export const AuthProvider: FunctionComponent<{}> = (props) => {
    const [state, dispatch] = useReducer(authReducer, initialAuthState);
    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export function useAuthState() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuthState must be used within a AuthProvider");
    }

    return context;
}
