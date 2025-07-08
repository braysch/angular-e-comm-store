import { Component, inject } from '@angular/core';
import { Customer } from '../../services/customer';
import { Product } from '../../types/product';
import { ProductCardComponent } from '../product/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ProductCardComponent, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  customerService = inject(Customer);
  newProducts:Product[] = [];
  featuredProducts:Product[] = [];

  ngOnInit() {
    this.customerService.getNewProudct().subscribe((result: any) => {
      this.newProducts = result;
    });
    this.customerService.getFeaturedProducts().subscribe((result: any) => {
      this.featuredProducts = result;
    });
  }
}
