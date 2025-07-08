import { Component, inject } from '@angular/core';
import { CategoryService } from '../../services/category';
import { Category } from '../../types/category';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { Customer } from '../../services/customer';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

searchCategory(id: string) {
  this.router.navigateByUrl("/products?categoryId="+id);
}

router = inject(Router);
onSearch(e: any) {
  if (e.target.value)
  {
    this.router.navigateByUrl("/products?search="+e.target.value);
  }
}

logout() {
  this.authService.logout();
  this.router.navigateByUrl("/login");
}

  customerService = inject(Customer);
  categoryList:Category[] = [];
  authService = inject(Auth);
  
  ngOnInit() {
    console.log("AHOY");
    this.customerService.getCategories().subscribe((result: any) => {
      this.categoryList = result;
    });
  }

}
