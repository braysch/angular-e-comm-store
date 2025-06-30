import { Routes } from '@angular/router';
import { CategoryForm } from './components/manage/category-form/category-form';
import { Categories } from './components/manage/categories/categories';
import { Home } from './components/home/home';
import { Brands } from './components/manage/brands/brands';
import { BrandForm } from './components/manage/brand-form/brand-form';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'admin/categories',
        component: Categories
    },
    {
        path: 'admin/brands',
        component: Brands
    },
    {
        path: 'admin/categories/add',
        component: CategoryForm
    },
    {
        path: 'admin/brands/add',
        component: BrandForm
    },
    {
        path: 'admin/brands/:id',
        component: BrandForm
    }

];
