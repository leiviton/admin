import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrmDashboardComponent } from './crm-dashboard/crm-dashboard.component';
import { extract } from '@app/core';

const routes: Routes = [
    {
        path: '**',
        component: CrmDashboardComponent,
        data: { title: extract('Dashboard') }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrmRoutingModule {}
