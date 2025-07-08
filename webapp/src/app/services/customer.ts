import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Product } from '../types/product';
import { HttpClient } from '@angular/common/http';
import { Category } from '../types/category';

@Injectable({
  providedIn: 'root'
})
export class Customer {
  http=inject(HttpClient);
  constructor() { }

  getNewProudct() {
    return this.http.get<Product[]>(environment.apiUrl + '/customer/home/new-products');
  }

  getFeaturedProducts() {
    return this.http.get<Product[]>(environment.apiUrl + '/customer/home/featured-products');
  }

  getCategories() {
    console.log("Getting categories...");
    return this.http.get<Category[]>(environment.apiUrl + '/customer/categories');
  }

}
