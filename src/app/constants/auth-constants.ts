import { LoginResponse, RegisterResponse } from "../models/auth";

export const fakeLoginResponse: LoginResponse = {
    // mock
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    refreshToken: {
        id: 1,
        userId: 2,
        token: 'fakeRefreshToken...should al come from real backend',
        refreshCount: 2,
        expiryDate: new Date(),
    },
    tokenType: 'JWT'
}

export const fakeRegisterResponse: RegisterResponse = {
    status: 200,
    message: 'Registration was successful.'
}

export const LOCALSTORAGE_TOKEN_KEY = 'mock_token';

export function tokenGetter() {
    return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
}
