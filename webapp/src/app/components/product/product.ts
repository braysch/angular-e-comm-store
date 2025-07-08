import { Component, Input } from '@angular/core';
import { Product } from '../../types/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductCardComponent {
  
  @Input() product!: Product;

}
