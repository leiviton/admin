import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Covid19DashboardComponent } from './covid19-dashboard/covid19-dashboard.component';
import { extract } from '@app/core';

const routes: Routes = [
    {
        path: '**',
        component: Covid19DashboardComponent,
        data: { title: extract('COVID-19 Dashboard') }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Covid19RoutingModule {}
