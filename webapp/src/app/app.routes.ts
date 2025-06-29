import { Routes } from '@angular/router';
import { CategoryForm } from './components/manage/category-form/category-form';
import { Categories } from './components/manage/categories/categories';
import { Home } from './components/home/home';

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
        path: 'admin/categories/add',
        component: CategoryForm
    },
    {
        path: 'admin/categories/:id',
        component: CategoryForm
    }

];
