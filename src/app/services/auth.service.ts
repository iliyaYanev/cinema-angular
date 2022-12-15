import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fakeLoginResponse, fakeRegisterResponse, LOCALSTORAGE_TOKEN_KEY } from "../constants/login-mock";
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "../models/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    loggedIn = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient, private snackbar: MatSnackBar, private jwtService: JwtHelperService) {}

    login(loginRequest: LoginRequest): Observable<LoginResponse> {
        this.loggedIn.next(true);
        return of(fakeLoginResponse).pipe(
            tap((res: LoginResponse) => localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.accessToken)),
            tap(() => this.snackbar.open('Login Successful', 'Close', {
              duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
            }))
        );
      }

    register(registerRequest?: RegisterRequest): Observable<RegisterResponse> {
        return of(fakeRegisterResponse).pipe(
            tap((res: RegisterResponse) => this.snackbar.open(`User created successfully`, 'Close', {
              duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
            })),
        );
      }

    logout(): void {
          this.loggedIn.next(false);
          localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
      }
    isLoggedIn(): Observable<boolean> {
        return this.loggedIn.asObservable();
    }
}
