import { Component, inject } from '@angular/core';
import { Auth } from '../../services/auth';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  formbuilder = inject(FormBuilder);
  registerForm = this.formbuilder.group({
    name:['',[Validators.required]],
    email:['',[Validators.required]],
    password:['',[Validators.minLength(5)]],
  });

  authService = inject(Auth)

  register() {
    console.log("Registering...");
    let value = this.registerForm.value;
    this.authService.register(value.name!, value.email!, value.password!).subscribe(result => {
      alert("User registered!");
    })
  }
}
