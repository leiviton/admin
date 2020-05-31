import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';

import { StoreHomeComponent } from './components/store-home/store-home.component';
import { StoreCategoriesComponent } from './components/store-categories/store-categories.component';
import { StoreCategoryDetailsComponent } from './components/store-category-details/store-category-details.component';
import { StoreProductDetailsComponent } from './components/store-product-details/store-product-details.component';
import { StoreSearchProductsComponent } from './components/store-search-products/store-search-products.component';

// Module is lazy loaded, see app-routing.module.ts
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: StoreHomeComponent,
        data: { title: extract('Welcome to our store') }
    },
    {
        path: 'categories',
        //component: StoreHomeComponent,
        children: [
            {
                path: '',
                component: StoreCategoriesComponent,
                data: { title: extract('All Categories') }
            },
            {
                path: ':id',
                component: StoreCategoryDetailsComponent,
                data: { title: extract('Category') }
            }
        ],
        data: { title: extract('Welcome to our store') }
    },
    {
        path: 'products',
        //component: StoreProductsComponent,
        children: [
            {
                path: '',
                component: StoreSearchProductsComponent,
                data: { title: extract('Products') }
            },
            {
                path: ':id',
                component: StoreProductDetailsComponent,
                data: { title: extract('Product details') }
            }
        ],
        data: { title: extract('Products') }
    },

    // Fallback when no prior route is matched
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreRoutingModule {
    static declarations = [
        StoreHomeComponent,
        StoreCategoriesComponent,
        StoreCategoryDetailsComponent,
        StoreSearchProductsComponent,
        StoreProductDetailsComponent
    ];
}
