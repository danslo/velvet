import {Dispatch} from "react";
import {GenerateAdminTokenDocument, GenerateAdminTokenMutation} from "../types";
import {client, setClientLink} from "../utils/client";
import {FetchResult} from "@apollo/client";

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

type LoginPayload = {
    username: string,
    password: string
};

export async function login(dispatch: Dispatch<AuthAction>, loginPayload: LoginPayload) {
    dispatch({type: ActionType.LoginRequest});
    client.mutate({
        mutation: GenerateAdminTokenDocument,
        variables: loginPayload
    }).then((result: FetchResult<GenerateAdminTokenMutation>) => {
        const token = result.data!.generateAdminToken;
        dispatch({type: ActionType.LoginUser, token: token});
        localStorage.setItem('token', token);
        setClientLink(token);
    }).catch((reason: {message: string}) => {
        dispatch({type: ActionType.LoginFailed, errorMessage: reason.message});
    });
}

export async function logout(dispatch: Dispatch<AuthAction>) {
    dispatch({type: ActionType.LogoutUser});
    localStorage.removeItem('token');
    await client.clearStore();
}
