import {AuthState} from "./state";
import {ActionType, AuthAction} from "./actions";

export function authReducer(state: AuthState, action: AuthAction) {
    console.log(action);

    switch (action.type) {
        case ActionType.LoginUser:
            return {
                ...state,
                token: action.token
            };
        case ActionType.LogoutUser:
            return {
                ...state,
                token: null
            }
        default:
            return state;
    }
}
