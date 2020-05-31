import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsBillingComponent } from './components/settings-billing/settings-billing.component';
import { SettingsAccountComponent } from './components/settings-account/settings-account.component';
import { SettingsNotificationsComponent } from './components/settings-notifications/settings-notifications.component';
import { SettingsPersonalComponent } from './components/settings-personal/settings-personal.component';
import { SettingsSecurityComponent } from './components/settings-security/settings-security.component';
import { SettingsIntegrationsComponent } from './components/settings-integrations/settings-integrations.component';
import { SettingsShellComponent } from './components/settings-shell/settings-shell.component';
import { extract } from '@app/core';

const routes: Routes = [
    {
        path: '',
        component: SettingsShellComponent,
        children: [
            { path: '', redirectTo: 'account', pathMatch: 'full' },
            {
                path: 'account',
                component: SettingsAccountComponent,
                data: { title: extract('Account') }
            },
            {
                path: 'personal',
                component: SettingsPersonalComponent,
                data: { title: extract('Personal') }
            },
            {
                path: 'billing',
                component: SettingsBillingComponent,
                data: { title: extract('Billing') }
            },
            {
                path: 'notifications',
                component: SettingsNotificationsComponent,
                data: { title: extract('Notifications') }
            },
            {
                path: 'integrations',
                component: SettingsIntegrationsComponent,
                data: { title: extract('Integrations') }
            },
            {
                path: 'security',
                component: SettingsSecurityComponent,
                data: { title: extract('Security') }
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
export class SettingsRoutingModule {
    static declarations = [
        SettingsBillingComponent,
        SettingsAccountComponent,
        SettingsNotificationsComponent,
        SettingsPersonalComponent,
        SettingsSecurityComponent,
        SettingsIntegrationsComponent,
        SettingsShellComponent
    ];
}
