import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';

import { UiAlertsComponent } from './components/ui-alerts/ui-alerts.component';
import { UiButtonsComponent } from './components/ui-buttons/ui-buttons.component';
import { UiButtonGroupComponent } from './components/ui-button-group/ui-button-group.component';
import { UiColorsComponent } from './components/ui-colors/ui-colors.component';
import { UiAccordionComponent } from './components/ui-accordion/ui-accordion.component';
import { UiDropdownsComponent } from './components/ui-dropdowns/ui-dropdowns.component';
import { UiModalsComponent } from './components/ui-modals/ui-modals.component';
import { UiNavigationsComponent } from './components/ui-navigations/ui-navigations.component';
import { UiTabsComponent } from './components/ui-tabs/ui-tabs.component';
import { UiProgressComponent } from './components/ui-progress/ui-progress.component';
import { UiTypographicComponent } from './components/ui-typographic/ui-typographic.component';
import { UiPopoverComponent } from './components/ui-popover/ui-popover.component';
import { UiTooltipComponent } from './components/ui-tooltip/ui-tooltip.component';
import { UiAvatarsComponent } from './components/ui-avatars/ui-avatars.component';

const routes: Routes = [
    // Module is lazy loaded, see app-routing.module.ts
    { path: '', redirectTo: 'colors', pathMatch: 'full' },
    {
        path: 'accordion',
        component: UiAccordionComponent,
        data: { title: extract('UI - Accordions') }
    },
    {
        path: 'avatars',
        component: UiAvatarsComponent,
        data: { title: extract('UI - Avatars') }
    },
    {
        path: 'alerts',
        component: UiAlertsComponent,
        data: { title: extract('UI - Alerts') }
    },
    {
        path: 'buttons',
        component: UiButtonsComponent,
        data: { title: extract('UI - Buttons') }
    },
    {
        path: 'button-group',
        component: UiButtonGroupComponent,
        data: { title: extract('UI - Button Groups') }
    },
    {
        path: 'colors',
        component: UiColorsComponent,
        data: { title: extract('UI - Colors') }
    },
    {
        path: 'dropdowns',
        component: UiDropdownsComponent,
        data: { title: extract('UI - DropDowns') }
    },
    {
        path: 'modals',
        component: UiModalsComponent,
        data: { title: extract('UI - Modals') }
    },
    {
        path: 'navigations',
        component: UiNavigationsComponent,
        data: { title: extract('UI - Navigations') }
    },
    {
        path: 'popover',
        component: UiPopoverComponent,
        data: { title: extract('UI - Popover') }
    },
    {
        path: 'progress',
        component: UiProgressComponent,
        data: { title: extract('UI - Progress') }
    },
    {
        path: 'tabs',
        component: UiTabsComponent,
        data: { title: extract('UI - Tabs') }
    },
    {
        path: 'tooltip',
        component: UiTooltipComponent,
        data: { title: extract('UI - Tooltip') }
    },
    {
        path: 'typographic',
        component: UiTypographicComponent,
        data: { title: extract('UI - Typographic') }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UiElementsRoutingModule {
    static declarations = [
        UiAccordionComponent,
        UiAvatarsComponent,
        UiAlertsComponent,
        UiButtonsComponent,
        UiButtonGroupComponent,
        UiColorsComponent,
        UiDropdownsComponent,
        UiModalsComponent,
        UiNavigationsComponent,
        UiPopoverComponent,
        UiProgressComponent,
        UiTabsComponent,
        UiTooltipComponent,
        UiTypographicComponent
    ];
}
