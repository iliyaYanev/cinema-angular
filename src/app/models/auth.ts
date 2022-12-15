export interface LoginResponse {
    accessToken: string;
    _id: string;
    email: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    email: string;
    username: string;
    firstname: string;
    lastname: string;
    password: string;
    passwordConfirm: string;
}

export interface RegisterResponse {
    accessToken: string;
    _id: string;
    email: string;
}
