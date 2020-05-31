import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { UtilsModule } from '@app/blocks/utils';
import { AlertsModule } from '@app/blocks/alerts/alerts.module';
import { ProgressModule } from '@app/blocks/progress/progress.module';
import { NavigationsModule } from '@app/blocks/navigations/navigations.module';
import { AvatarsModule } from '@app/blocks/avatars/avatars.module';

import { UiElementsRoutingModule } from './ui-elements-routing.module';
import { UiColorBoxComponent } from './components/ui-color-box/ui-color-box.component';
import { UiColorRibbonComponent } from './components/ui-color-ribbon/ui-color-ribbon.component';
import { UiDropdownComponentDemoComponent } from './components/ui-dropdown-component-demo/ui-dropdown-component-demo.component';
import { UiModalComponentDemoComponent } from './components/ui-modal-component-demo/ui-modal-component-demo.component';
import { UiTabContentComponent } from './components/ui-tab-content/ui-tab-content.component';

@NgModule({
    declarations: [
        ...UiElementsRoutingModule.declarations,
        UiColorBoxComponent,
        UiColorRibbonComponent,
        UiDropdownComponentDemoComponent,
        UiModalComponentDemoComponent,
        UiTabContentComponent
    ],
    imports: [
        SharedModule,
        UtilsModule,
        AvatarsModule,
        AlertsModule,
        ProgressModule,
        NavigationsModule,

        UiElementsRoutingModule
    ]
    //entryComponents: [UiModalComponentDemoComponent]
})
export class UiElementsModule {}
