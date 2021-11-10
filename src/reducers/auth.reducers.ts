import {AuthState, initialAuthState} from "../state/auth.state";
import {ActionType, AuthAction} from "../actions/auth.actions";

export function authReducer(state: AuthState, action: AuthAction) {
    switch (action.type) {
        case ActionType.LogoutUser:
        case ActionType.LoginRequest:
            return initialAuthState;
        case ActionType.LoginUser:
            return {
                ...initialAuthState,
                token: action.token
            };
        case ActionType.LoginFailed:
            return {
                ...initialAuthState,
                errorMessage: action.errorMessage
            }
        default:
            return state;
    }
}
