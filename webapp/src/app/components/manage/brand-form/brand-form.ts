import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrandService } from '../../../services/brand';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brand-form',
  imports: [FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './brand-form.html',
  styleUrl: './brand-form.css'
})
export class BrandForm {

  name!: string;
  brandService = inject(BrandService);
  router = inject(Router);
  route = inject(ActivatedRoute)
  isEdit = false;
  id!: string;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id) {
      this.isEdit = true;
      this.brandService.getBrandById(this.id).subscribe((result: any) => {
        console.log(result);
        this.name = result.name;
      });
    } else { console.log("No ID found, not in edit mode");}
  }
  add() {
    this.brandService.addBrand(this.name).subscribe((result: any) => {
      alert('Brand added successfully');
      this.router.navigateByUrl('/admin/brands');
    });
}

update() {
  console.log(this.name);
  this.brandService.updateBrand(this.id, this.name).subscribe((result: any) => {
    alert('Brand updated successfully');
    this.router.navigateByUrl('/admin/brands');
  });
}

}
