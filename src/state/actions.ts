import {Dispatch} from "react";
import {GenerateAdminTokenDocument} from "../types";
import {client} from "../index";
import {NavigateFunction} from "react-router";

export enum ActionType {
    LoginUser,
    LogoutUser
}

export type AuthAction =
    | { type: ActionType.LoginUser, token: string }
    | { type: ActionType.LogoutUser };

export async function login(navigate: NavigateFunction, dispatch: Dispatch<AuthAction>, loginPayload: {
    username: string,
    password: string
}) {
    client.mutate({
        mutation: GenerateAdminTokenDocument,
        variables: {
            username: loginPayload.username,
            password: loginPayload.password
        }
    }).catch(reason => console.log(reason)).then((result: any) => { // TODO: fix type
        dispatch({type: ActionType.LoginUser, token: result.data.generateAdminToken});
        navigate("/dashboard");
    })
}

export async function logout(dispatch: Dispatch<AuthAction>) {
    dispatch({type: ActionType.LogoutUser});
}
