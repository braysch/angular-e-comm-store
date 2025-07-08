import { Routes } from '@angular/router';
import { CategoryForm } from './components/manage/category-form/category-form';
import { Categories } from './components/manage/categories/categories';
import { Home } from './components/home/home';
import { Brands } from './components/manage/brands/brands';
import { BrandForm } from './components/manage/brand-form/brand-form';
import { Products } from './components/manage/products/products';
import { ProductForm } from './components/manage/product-form/product-form';
import { ProductList } from './components/product-list/product-list';
import { ProductDetail } from './components/product-detail/product-detail';

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
        path: 'admin/products',
        component: Products
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
        path: 'admin/products/add',
        component: ProductForm
    },
    {
        path: 'admin/categories/:id',
        component: CategoryForm
    },
    {
        path: 'admin/brands/:id',
        component: BrandForm
    },
    {
        path: 'admin/products/:id',
        component: ProductForm
    },
    {
        path: 'products',
        component: ProductList
    },
    {
        path: 'products/:id',
        component: ProductDetail
    },
];
