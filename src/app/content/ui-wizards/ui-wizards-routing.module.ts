import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';

import { UiWizardBulletsNavComponent } from './components/ui-wizard-bullets-nav/ui-wizard-bullets-nav.component';
import { UiWizardBulletsStepsComponent } from './components/ui-wizard-bullets-steps/ui-wizard-bullets-steps.component';
import { UiWizardCirclesNavComponent } from './components/ui-wizard-circles-nav/ui-wizard-circles-nav.component';
import { UiWizardTabsNavComponent } from './components/ui-wizard-tabs-nav/ui-wizard-tabs-nav.component';

const routes: Routes = [
    // Module is lazy loaded, see app-routing.module.ts
    { path: '', redirectTo: 'bulleted-nav', pathMatch: 'full' },
    {
        path: 'bulleted-steps',
        component: UiWizardBulletsStepsComponent,
        data: { title: extract('Wizard - Bullets Steps') }
    },
    {
        path: 'bulleted-nav',
        component: UiWizardBulletsNavComponent,
        data: { title: extract('Wizard - Bullets Navigation') }
    },
    {
        path: 'circled',
        component: UiWizardCirclesNavComponent,
        data: { title: extract('Wizard - Circles Navigation') }
    },
    {
        path: 'tabbed',
        component: UiWizardTabsNavComponent,
        data: { title: extract('Wizard - Tabs Navigation') }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UiWizardsRoutingModule {
    static declarations = [
        UiWizardBulletsStepsComponent,
        UiWizardBulletsNavComponent,
        UiWizardCirclesNavComponent,
        UiWizardTabsNavComponent
    ];
}
