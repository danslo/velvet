import {createContext, FunctionComponent, useState} from "react";
import {client, setClientLink} from "./client";
import {GenerateAdminTokenDocument, GenerateAdminTokenMutation} from "../types";
import {FetchResult} from "@apollo/client";

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

export async function login(payload: { username: string, password: string }, setToken: setToken) {
    client.mutate({
        mutation: GenerateAdminTokenDocument,
        variables: payload
    }).then((result: FetchResult<GenerateAdminTokenMutation>) => {
        const token = result.data!.generateAdminToken;
        setToken(token);
        localStorage.setItem('token', token);
        setClientLink(token);
    }).catch((reason: { message: string }) => {
        // TODO: show error
    });
}

export async function logout(setToken: setToken) {
    setToken(null);
    localStorage.removeItem('token');
    await client.clearStore();
}
