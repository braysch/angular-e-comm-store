import { Component, inject } from '@angular/core';
import { CategoryService } from '../../services/category';
import { Category } from '../../types/category';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  categoryService = inject(CategoryService);
  categoryList:Category[] = [];
  
  ngOnInit() {
    this.categoryService.getCategories().subscribe((result: any) => {
      this.categoryList = result;
    });
  }

}
