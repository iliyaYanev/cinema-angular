export const LOCALSTORAGE_TOKEN_KEY = 'auth_token';

export const BASE_URL = 'http://localhost:3030';
export const LOGIN_PATH = BASE_URL + '/auth/login';
export const REGISTER_PATH = BASE_URL + '/auth/register';

export function tokenGetter() {
    return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
}
