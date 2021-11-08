import { Dispatch } from "react";

export enum ActionType {
    LoginUser,
    LogoutUser
}
export type AuthAction =
    | { type: ActionType.LoginUser, payload: { token: string } }
    | { type: ActionType.LogoutUser };

interface LoginPayload {
    username: string,
    password: string
}

export async function login(dispatch: Dispatch<AuthAction>, loginPayload: LoginPayload) {
    console.log('Attempting to login...');
    console.log(loginPayload.username);
    console.log(loginPayload.password);
    dispatch({type: ActionType.LoginUser, payload: {token: "abc"}});
}

export async function logout(dispatch: Dispatch<AuthAction>) {
    dispatch({type: ActionType.LogoutUser});
}
