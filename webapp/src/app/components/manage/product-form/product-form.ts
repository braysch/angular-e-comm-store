import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ProductService } from '../../../services/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductForm {

  name!: string;
  productService = inject(ProductService);
  router = inject(Router);
  route = inject(ActivatedRoute)
  isEdit = false;
  id!: string;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id) {
      this.isEdit = true;
      this.productService.getProductById(this.id).subscribe((result: any) => {
        console.log(result);
        this.name = result.name;
      });
    } else { console.log("No ID found, not in edit mode");}
  }
  add() {
    this.productService.addProduct(this.name).subscribe((result: any) => {
      alert('Product added successfully');
      this.router.navigateByUrl('/admin/products');
    });
}

update() {
  console.log(this.name);
  this.productService.updateProduct(this.id, this.name).subscribe((result: any) => {
    alert('Product updated successfully');
    this.router.navigateByUrl('/admin/products');
  });
}

}
