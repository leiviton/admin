import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { UserIdleComponent } from './components/user-idle/user-idle.component';

const routes: Routes = [
    // Module is lazy loaded, see app-routing.module.ts
    { path: '', redirectTo: 'user-idle', pathMatch: 'full' },
    {
        path: 'user-idle',
        component: UserIdleComponent,
        data: { title: extract('Utils - User Idle') }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagementRoutingModule {
    static declarations = [UserIdleComponent];
}
