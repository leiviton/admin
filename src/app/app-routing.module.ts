import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
    Shell.childRoutes([
        {
            path: 'home',
            loadChildren: () =>
                import('./content/home/home.module').then(m => m.HomeModule)
        },
        {
            path: '',
            loadChildren: () =>
                import('./content/dashboards/dashboards.module').then(
                    m => m.DashboardsModule
                )
        },
        {
            path: 'data-tables',
            loadChildren: () =>
                import('./content/data-tables/data-tables.module').then(
                    m => m.DataTablesModule
                )
        },
        {
            path: 'editors',
            loadChildren: () =>
                import('./content/editors/editors.module').then(
                    m => m.EditorsModule
                )
        },
        {
            path: 'form-components',
            loadChildren: () =>
                import('./content/form-components/form-components.module').then(
                    m => m.FormComponentsModule
                )
        },
        {
            path: 'management',
            loadChildren: () =>
                import('./content/management/management.module').then(
                    m => m.ManagementModule
                )
        },
        {
            path: 'settings',
            loadChildren: () =>
                import('./content/settings/settings.module').then(
                    m => m.SettingsModule
                )
        },
        {
            path: 'ui-elements',
            loadChildren: () =>
                import('./content/ui-elements/ui-elements.module').then(
                    m => m.UiElementsModule
                )
        },
        {
            path: 'wizards',
            loadChildren: () =>
                import('./content/ui-wizards/ui-wizards.module').then(
                    m => m.UiWizardsModule
                )
        },

        // Apps Routes
        {
            path: 'billing',
            loadChildren: () =>
                import('./content/apps/billing/billing.module').then(
                    m => m.BillingModule
                )
        },
        {
            path: 'calendar',
            loadChildren: () =>
                import('./content/apps/calendar/calendar.module').then(
                    m => m.CalendarModule
                )
        },
        {
            path: 'contacts',
            loadChildren: () =>
                import('./content/apps/contacts/contacts.module').then(
                    m => m.ContactsModule
                )
        },
        {
            path: 'inbox',
            loadChildren: () =>
                import('./content/apps/inbox/inbox.module').then(
                    m => m.InboxModule
                )
        },
        {
            path: 'store',
            loadChildren: () =>
                import('./content/apps/store/store.module').then(
                    m => m.StoreModule
                )
        },
        {
            path: 'projects',
            loadChildren: () =>
                import('./content/apps/projects/projects.module').then(
                    m => m.ProjectsModule
                )
        },
        {
            path: 'tickets',
            loadChildren: () =>
                import('./content/apps/tickets/tickets.module').then(
                    m => m.TicketsModule
                )
        },
        {
            path: 'todo',
            loadChildren: () =>
                import('./content/apps/todo/todo.module').then(
                    m => m.TodoModule
                )
        }
    ]),

    // Fallback when no prior route is matched
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
            scrollPositionRestoration: 'enabled'
        })
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}
