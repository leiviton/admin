import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // Module is lazy loaded, see app-routing.module.ts
    {
        path: '',
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./crm/crm.module').then(m => m.CrmModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
