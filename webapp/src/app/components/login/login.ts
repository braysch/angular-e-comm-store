import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
formbuilder = inject(FormBuilder);
  loginForm = this.formbuilder.group({
    email:['',[Validators.required]],
    password:['',[Validators.minLength(5)]],
  });

  authService = inject(Auth);
  router = inject(Router);

  login() {
    console.log("Logging in...");
    let value = this.loginForm.value;
    this.authService.login(value.email!, value.password!).subscribe((result: any) => {
      alert("User logged in!");
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));
      this.router.navigateByUrl("/");
    })
  }
}

