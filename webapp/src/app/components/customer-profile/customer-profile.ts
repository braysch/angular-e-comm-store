import { Component, inject } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-customer-profile',
  imports: [],
  templateUrl: './customer-profile.html',
  styleUrl: './customer-profile.css'
})
export class CustomerProfile {

  authService = inject(Auth);

}
