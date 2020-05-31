import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { FormControlsModule } from '@app/blocks/form-controls/form-controls.module';
import { UtilsModule } from '@app/blocks/utils';
import { AlertsModule } from '@app/blocks/alerts/alerts.module';
import { DatePickersModule } from '@app/blocks/date-pickers/date-pickers.module';
import { AvatarsModule } from '@app/blocks/avatars/avatars.module';

import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
    declarations: [...SettingsRoutingModule.declarations],
    imports: [
        SharedModule,
        FormControlsModule,
        AvatarsModule,
        UtilsModule,
        AlertsModule,
        DatePickersModule,
        SettingsRoutingModule
    ]
})
export class SettingsModule {}
