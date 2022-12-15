import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { CustomValidators } from '../../../constants/custom-validator';
import { AuthService } from '../../../services/auth.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        username: new FormControl(null, [Validators.required]),
        firstname: new FormControl(null, [Validators.required]),
        lastname: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required]),
        passwordConfirm: new FormControl(null, [Validators.required])
      },
      { validators: CustomValidators.passwordsMatching }
  )

  constructor(
      private router: Router,
      private authService: AuthService
  ) { }

  register() {
    if (!this.registerForm.valid) {
      return;
    }
    this.authService.register()
        .pipe(tap(() => this.router.navigate(['/auth/login'])))
        .subscribe();
  }

}
