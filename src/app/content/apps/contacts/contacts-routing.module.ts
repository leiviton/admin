import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';

import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactsGridComponent } from './components/contacts-grid/contacts-grid.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactNewComponent } from './components/contact-new/contact-new.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';
import { ContactDeleteComponent } from './components/contact-delete/contact-delete.component';
import { ContactPersonalComponent } from './components/details/contact-personal/contact-personal.component';
import { ContactDocumentsComponent } from './components/details/contact-documents/contact-documents.component';
import { ContactProjectsComponent } from './components/details/contact-projects/contact-projects.component';
import { ContactAnalyticsComponent } from './components/details/contact-analytics/contact-analytics.component';

const routes: Routes = [
    // Module is lazy loaded, see app-routing.module.ts
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    {
        path: 'list',
        component: ContactsListComponent,
        data: { title: extract('Contact List') }
    },
    {
        path: 'grid',
        component: ContactsGridComponent,
        data: { title: extract('Contact Grid') }
    },
    {
        path: 'new',
        component: ContactNewComponent,
        data: { title: extract('Add Contact') }
    },
    {
        path: ':id',
        children: [
            { path: '', redirectTo: 'details', pathMatch: 'full' },
            {
                path: 'edit',
                component: ContactEditComponent,
                data: { title: extract('Edit Contact') }
            },
            {
                path: 'delete',
                component: ContactDeleteComponent,
                data: { title: extract('Delete Contact') }
            },
            {
                path: 'details',
                component: ContactDetailsComponent,
                children: [
                    { path: '', redirectTo: 'personal', pathMatch: 'full' },
                    {
                        path: 'personal',
                        component: ContactPersonalComponent,
                        data: { title: extract('Personal Information') }
                    },
                    {
                        path: 'documents',
                        component: ContactDocumentsComponent,
                        data: { title: extract('Personal Documents') }
                    },
                    {
                        path: 'projects',
                        component: ContactProjectsComponent,
                        data: { title: extract('Contact Projects') }
                    },
                    {
                        path: 'analytics',
                        component: ContactAnalyticsComponent,
                        data: { title: extract('Contact Analytics') }
                    }
                ]
            }
        ]
    },

    // Fallback when no prior route is matched
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactsRoutingModule {
    static declarations = [
        ContactsListComponent,
        ContactsGridComponent,
        ContactDetailsComponent,
        ContactNewComponent,
        ContactEditComponent,
        ContactDeleteComponent,

        ContactPersonalComponent,
        ContactDocumentsComponent,
        ContactProjectsComponent,
        ContactAnalyticsComponent
    ];
}
