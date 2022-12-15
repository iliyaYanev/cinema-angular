import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LOCALSTORAGE_TOKEN_KEY, LOGIN_PATH, REGISTER_PATH } from "../constants/auth-constants";
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "../models/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    loggedIn = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

    login(loginRequest: LoginRequest): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(LOGIN_PATH, loginRequest).pipe(
            tap((res: LoginResponse) => localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.accessToken)),
            tap(() => this.loggedIn.next(true)),
            tap(() => this.snackbar.open('Login Successful', 'Close', {
            duration: 1500, horizontalPosition: 'right', verticalPosition: 'top' })));
      }

    register(registerRequest?: RegisterRequest): Observable<RegisterResponse> {
         return this.http.post<RegisterResponse>(REGISTER_PATH, registerRequest).pipe(
            tap((res: LoginResponse) => localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.accessToken)),
            tap(() => this.loggedIn.next(true)),
            tap(() => this.snackbar.open(`User created successfully`, 'Close', {
            duration: 1500, horizontalPosition: 'right', verticalPosition: 'top' })));
      }

    logout(): void {
          this.loggedIn.next(false);
          localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
      }
    isLoggedIn(): Observable<boolean> {
        return this.loggedIn.asObservable();
    }
}
