export interface AuthState {
    token: string|null;
    errorMessage: string|null
}

export const initialAuthState: AuthState = {
    token: localStorage.getItem('token'),
    errorMessage: null
}
