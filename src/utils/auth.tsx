import {createContext, FunctionComponent, useState} from "react";

type token = string | null;
type setToken = React.Dispatch<React.SetStateAction<token>>;

export const AuthStateContext = createContext<{ token: token, setToken: setToken }>({
    token: null,
    setToken: () => undefined
});

export const AuthProvider: FunctionComponent<{}> = (props) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    return (
        <AuthStateContext.Provider value={{token, setToken}}>
            {props.children}
        </AuthStateContext.Provider>
    );
}
