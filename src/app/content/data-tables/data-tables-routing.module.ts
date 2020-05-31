import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';

import { NgxDtBasicComponent } from './components/ngx-datatable/ngx-dt-basic/ngx-dt-basic.component';
import { NgxDtGroupingComponent } from './components/ngx-datatable/ngx-dt-grouping/ngx-dt-grouping.component';
import { NgxDtFixedHeaderComponent } from './components/ngx-datatable/ngx-dt-fixed-header/ngx-dt-fixed-header.component';
import { NgxDtStylesComponent } from './components/ngx-datatable/ngx-dt-styles/ngx-dt-styles.component';
import { NgxDtCheckboxComponent } from './components/ngx-datatable/ngx-dt-checkbox/ngx-dt-checkbox.component';
import { NgxDtRowDetailsComponent } from './components/ngx-datatable/ngx-dt-row-details/ngx-dt-row-details.component';
import { NgxDtCustomTemplatesComponent } from './components/ngx-datatable/ngx-dt-custom-templates/ngx-dt-custom-templates.component';
import { NgxDtFilteringComponent } from './components/ngx-datatable/ngx-dt-filtering/ngx-dt-filtering.component';
import { NgxDtRealContactsComponent } from './components/ngx-datatable/ngx-dt-real-contacts/ngx-dt-real-contacts.component';
import { NgxDtRealOrdersComponent } from './components/ngx-datatable/ngx-dt-real-orders/ngx-dt-real-orders.component';
import { NgxDtResponsiveComponent } from './components/ngx-datatable/ngx-dt-responsive/ngx-dt-responsive.component';
import { NgxDtResponsiveExpandableComponent } from './components/ngx-datatable/ngx-dt-responsive-expandable/ngx-dt-responsive-expandable.component';

const routes: Routes = [
    // Module is lazy loaded, see app-routing.module.ts
    { path: '', redirectTo: 'basic', pathMatch: 'full' },
    {
        path: 'basic',
        component: NgxDtBasicComponent,
        data: { title: extract('Basic Table') }
    },
    {
        path: 'styles',
        component: NgxDtStylesComponent,
        data: { title: extract('Table Styles') }
    },
    {
        path: 'fixed-header',
        component: NgxDtFixedHeaderComponent,
        data: { title: extract('Fixed header') }
    },
    {
        path: 'checkbox',
        component: NgxDtCheckboxComponent,
        data: { title: extract('Table Checkbox') }
    },

    {
        path: 'row-details',
        component: NgxDtRowDetailsComponent,
        data: { title: extract('Row Details') }
    },
    {
        path: 'grouping',
        component: NgxDtGroupingComponent,
        data: { title: extract('Grouping') }
    },
    {
        path: 'custom-templates',
        component: NgxDtCustomTemplatesComponent,
        data: { title: extract('Row Details') }
    },
    {
        path: 'filtering',
        component: NgxDtFilteringComponent,
        data: { title: extract('Filtering') }
    },

    {
        path: 'responsive-template',
        component: NgxDtResponsiveComponent,
        data: { title: extract('Responsive Template') }
    },
    {
        path: 'responsive-expandable',
        component: NgxDtResponsiveExpandableComponent,
        data: { title: extract('Responsive Expandable') }
    },

    {
        path: 'contacts',
        component: NgxDtRealContactsComponent,
        data: { title: extract('Contacts') }
    },
    {
        path: 'orders',
        component: NgxDtRealOrdersComponent,
        data: { title: extract('Orders') }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DataTablesRoutingModule {
    static declarations = [
        NgxDtBasicComponent,
        NgxDtFixedHeaderComponent,
        NgxDtGroupingComponent,
        NgxDtStylesComponent,
        NgxDtCheckboxComponent,
        NgxDtRowDetailsComponent,
        NgxDtCustomTemplatesComponent,
        NgxDtFilteringComponent,
        NgxDtResponsiveComponent,
        NgxDtResponsiveExpandableComponent,
        NgxDtRealContactsComponent,
        NgxDtRealOrdersComponent
    ];
}
