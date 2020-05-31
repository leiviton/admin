import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';

import { TicketsHomeComponent } from './components/tickets-home/tickets-home.component';

const routes: Routes = [
    // Module is lazy loaded, see app-routing.module.ts
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: TicketsHomeComponent,
        data: { title: extract('Tickets Home') }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TicketsRoutingModule {
    static declarations = [TicketsHomeComponent];
}
