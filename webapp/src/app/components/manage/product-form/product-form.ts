import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ProductService } from '../../../services/product';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { CategoryService } from '../../../services/category';
import { BrandService } from '../../../services/brand';
import { Brand } from '../../../types/brand';
import { Category } from '../../../types/category';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatInputModule, MatButtonModule, MatSelectModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductForm {

  formBuilder = inject(FormBuilder);
  productForm = this.formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(5)]],
    description: [null, [Validators.required, Validators.minLength(50)]],
    shortDescription: [null, [Validators.required, Validators.minLength(10)]],
    price: [null, [Validators.required]],
    discount: [0],
    sellingPrice: [0],
    images: this.formBuilder.array([]),
    categoryId: [null, [Validators.required]],
    brandId: [null, [Validators.required]],
  });
  productService = inject(ProductService);
  router = inject(Router);
  route = inject(ActivatedRoute)
  isEdit = false;
  id!: string;

  categoryService = inject(CategoryService);
  brandService = inject(BrandService)
  brands:Brand[] = [];
  categories:Category[] = [];

  ngOnInit() {
    this.addImage();
    this.categoryService.getCategories().subscribe((result: any) => {
      this.categories = result;
    });
    this.brandService.getBrands().subscribe((result: any) => {
      this.brands = result;
      console.log(this.brands);
    });
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id) {
      this.isEdit = true;
      this.productService.getProductById(this.id).subscribe((result: any) => {
        for (let index = 0; index < result.images.length; index++) {
          this.images.push(this.formBuilder.control(result.images[index], [Validators.required]));
        }
        this.productForm.patchValue(result as any);
      });
    } else { console.log("No ID found, not in edit mode");}
  }

  add() {
    let value = this.productForm.value;
    this.productService.addProduct(value as any).subscribe((result: any) => {
      alert('Product added successfully');
      this.router.navigateByUrl('/admin/products');
    });
}

update() {
  let value = this.productForm.value;
  this.productService.updateProduct(this.id, value as any).subscribe((result: any) => {
    alert('Product updated successfully');
    this.router.navigateByUrl('/admin/products');
  });
}

get images() {
  return this.productForm.get('images') as FormArray;
}

addImage() {
  this.images.push(this.formBuilder.control(null, [Validators.required]));
}

removeImage() {
  // remove images starting from the last one
  this.images.removeAt(this.images.length - 1);
}


}
