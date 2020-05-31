import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';

import { TodoHomeComponent } from './components/todo-home/todo-home.component';

const routes: Routes = [
    // Module is lazy loaded, see app-routing.module.ts
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: TodoHomeComponent,
        data: { title: extract('Projects Home') }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TodoRoutingModule {
    static declarations = [TodoHomeComponent];
}
