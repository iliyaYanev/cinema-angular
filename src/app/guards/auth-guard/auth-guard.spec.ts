import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from "@angular/common/http";
import { AuthGuard } from "./auth-guard";
import { JwtModule } from "@auth0/angular-jwt";
import { tokenGetter } from "../../constants/auth-constants";

describe('AuthGuard', () => {
  let service: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          allowedDomains: ['localhost:3000', 'localhost:8080']
        }})
      ]
    });

    service = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
