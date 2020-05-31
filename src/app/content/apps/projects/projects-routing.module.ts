import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ProjectsHomeComponent } from './components/projects-home/projects-home.component';

const routes: Routes = [
    // Module is lazy loaded, see app-routing.module.ts
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: ProjectsHomeComponent,
        data: { title: extract('Projects Home') }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule {
    static declarations = [ProjectsHomeComponent];
}
