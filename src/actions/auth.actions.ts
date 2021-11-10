import {Dispatch} from "react";
import {GenerateAdminTokenDocument} from "../types";
import {client, setClientLink} from "../utils/client";

export enum ActionType {
    LoginUser,
    LogoutUser,
    LoginFailed,
    LoginRequest
}

export type AuthAction =
    | { type: ActionType.LoginUser, token: string }
    | { type: ActionType.LogoutUser }
    | { type: ActionType.LoginFailed, errorMessage: string }
    | { type: ActionType.LoginRequest };

export async function login(dispatch: Dispatch<AuthAction>, loginPayload: {
    username: string,
    password: string
}, onSuccess = () => {}) {
    dispatch({type: ActionType.LoginRequest});
    client.mutate({
        mutation: GenerateAdminTokenDocument,
        variables: {
            username: loginPayload.username,
            password: loginPayload.password
        }
    }).then((result: any) => { // todo: type the result. GenerateAdminTokenMutationResult does not work?
        const token = result.data.generateAdminToken;
        dispatch({type: ActionType.LoginUser, token: token});
        localStorage.setItem('token', token);
        setClientLink(token);
        onSuccess();
    }).catch((reason: {message: string}) => {
        dispatch({type: ActionType.LoginFailed, errorMessage: reason.message});
    });
}

export async function logout(dispatch: Dispatch<AuthAction>) {
    dispatch({type: ActionType.LogoutUser});
    localStorage.removeItem('token');
    await client.clearStore();
}
