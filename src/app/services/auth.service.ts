import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fakeLoginResponse, fakeRegisterResponse, LOCALSTORAGE_TOKEN_KEY } from "../constants/login-mock";
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "../models/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private snackbar: MatSnackBar, private jwtService: JwtHelperService) {}

  /*
   Due to the '/api' the url will be rewritten by the proxy, e.g. to http://localhost:8080/api/auth/login
   this is specified in the src/proxy.conf.json
   the proxy.conf.json listens for /api and changes the target. You can also change this in the proxy.conf.json
   The `..of()..` can be removed if you have a real backend, at the moment, this is just a faked response
  */
  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return of(fakeLoginResponse).pipe(
        tap((res: LoginResponse) => localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.accessToken)),
        tap(() => this.snackbar.open('Login Successful', 'Close', {
          duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
        }))
    );
  }

  register(registerRequest: RegisterRequest): Observable<RegisterResponse> {
    return of(fakeRegisterResponse).pipe(
        tap((res: RegisterResponse) => this.snackbar.open(`User created successfully`, 'Close', {
          duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
        })),
    );
  }

  getLoggedInUser() {
      const decodedToken = this.jwtService.decodeToken();
      return decodedToken.user;
  }
}
