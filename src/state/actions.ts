import { Dispatch } from "react";

export enum ActionType {
    LoginUser,
    LogoutUser
}

export type AuthAction =
    | { type: ActionType.LoginUser, token: string }
    | { type: ActionType.LogoutUser };

export async function login(dispatch: Dispatch<AuthAction>, loginPayload: {
    username: string,
    password: string
}) {
    dispatch({type: ActionType.LoginUser, token: "abc"});
}

export async function logout(dispatch: Dispatch<AuthAction>) {
    dispatch({type: ActionType.LogoutUser});
}
