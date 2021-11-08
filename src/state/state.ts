export interface AuthState {
    token: string|null;
}

export const initialAuthState: AuthState = {
    token: null
}
