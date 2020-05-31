import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialDashboardComponent } from './social-dashboard/social-dashboard.component';
import { extract } from '@app/core';

const routes: Routes = [
    {
        path: '**',
        component: SocialDashboardComponent,
        data: { title: extract('Social Dashboard') }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SocialRoutingModule {}
