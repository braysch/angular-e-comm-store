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
import { Register } from './components/register/register';
import { Login } from './components/login/login';
import { authGuard } from './core/auth-guard';
import { AdminDashbaord } from './components/manage/admin-dashbaord/admin-dashbaord';
import { adminGuard } from './core/admin-guard';
import { Customer } from './services/customer';
import { CustomerProfile } from './components/customer-profile/customer-profile';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        canActivate: [authGuard]
    },
    {
        path: 'admin/categories',
        component: Categories,
        canActivate: [adminGuard]
    },
    {
        path: 'admin/brands',
        component: Brands,
        canActivate: [adminGuard]
    },
    {
        path: 'admin/products',
        component: Products,
        canActivate: [authGuard, adminGuard]
    },
    {
        path: 'admin/categories/add',
        component: CategoryForm,
        canActivate: [adminGuard]
    },
    {
        path: 'admin/brands/add',
        component: BrandForm,
        canActivate: [adminGuard]
    },
    {
        path: 'admin/products/add',
        component: ProductForm,
        canActivate: [adminGuard]
    },
    {
        path: 'admin/categories/:id',
        component: CategoryForm,
        canActivate: [adminGuard]
    },
    {
        path: 'admin/brands/:id',
        component: BrandForm,
        canActivate: [adminGuard]
    },
    {
        path: 'admin/products/:id',
        component: ProductForm,
        canActivate: [adminGuard]
    },
    {
        path: 'products',
        component: ProductList
    },
    {
        path: 'products/:id',
        component: ProductDetail
    },
    {
        path: 'register',
        component: Register
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'admin',
        component: AdminDashbaord,
        canActivate: [adminGuard]
    },
    {
        path: 'profile',
        component: CustomerProfile,
        canActivate: [authGuard],
    }
];
