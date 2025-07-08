import { Component, inject } from '@angular/core';
import { Customer } from '../../services/customer';
import { Product } from '../../types/product';
import { ProductCardComponent } from '../product/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  customerService = inject(Customer);
  searchTerm: string = '';
  categoryId: string = '';
  page: number = 1;
  pageSize: number = 5;
  sortBy: string = '';
  sortOrder: number = -1;
  brandId: string = '';
  products:Product[] = [];
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.queryParams.subscribe((x:any) => {
      this.searchTerm = x.search || '';
      this.categoryId = x.categoryId || '';
      this.getProducts();
    });
  }

  getProducts() {
    this.customerService.getProducts(
      this.searchTerm,
      this.categoryId,
      this.page,
      this.pageSize,
      this.sortBy,
      this.sortOrder, 
      this.brandId)
    .subscribe(result => {
      console.log(result);
      this.products = result;
    });
  }

}
