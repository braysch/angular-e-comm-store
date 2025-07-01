import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../types/product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient);
  constructor() { }

  getProducts() {
    return this.http.get<Product[]>(environment.apiUrl + '/product');
  }

  getProductById(id: string) {
    return this.http.get<Product>(environment.apiUrl + '/product/' + id);
  }

  addProduct(name: string) {
    return this.http.post(environment.apiUrl + '/product', {
      name: name,
    });
  }

  updateProduct(id: string, name: string) {
    return this.http.put(environment.apiUrl + '/product/' + id, {
      name: name,
    });
  }

  deleteProduct(id: string) {
    return this.http.delete(environment.apiUrl + '/product/' + id);
  }

}
