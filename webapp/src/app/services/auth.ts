import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Auth {


  constructor() { }

  http = inject(HttpClient);

  register(name: string, email: string, password: string) {
    return this.http.post(environment.apiUrl+"/auth/register", {
      name, email, password
    });
  }

  login(email: string, password: string) {
    return this.http.post(environment.apiUrl+"/auth/login", {
      email, password
    });
  }

  isLoggedIn() {
    let token =localStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  }

  getUserName() {
    let userData = localStorage.getItem("user");
    if (userData) {
      return JSON.parse(userData).name;
    }
    return null;
  }

getUserEmail() {
    let userData = localStorage.getItem("user");
    if (userData) {
      return JSON.parse(userData).email;
    }
    return null;
  }

  getIsAdmin() {
    let userData = localStorage.getItem("user");
    if (userData) {
      return JSON.parse(userData).isAdmin;
    }
    return false;
  }

  logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}
  
}
