import {AuthState, initialAuthState} from "./state";
import {ActionType, AuthAction} from "./actions";

export function authReducer(state: AuthState, action: AuthAction) {
    switch (action.type) {
        case ActionType.LoginUser:
            return {
                ...initialAuthState,
                token: action.token
            };
        case ActionType.LogoutUser:
            return {
                ...initialAuthState,
                token: null
            }
        default:
            return state;
    }
}
