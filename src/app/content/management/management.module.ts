import { NgModule } from '@angular/core';
import { ManagementRoutingModule } from './management-routing.module';
import { SharedModule } from '@app/shared';
import { UtilsModule } from '@app/blocks/utils';
import { ProgressModule } from '@app/blocks/progress/progress.module';

@NgModule({
    declarations: [ManagementRoutingModule.declarations],
    imports: [
        SharedModule,
        UtilsModule,
        ProgressModule,
        ManagementRoutingModule
    ]
})
export class ManagementModule {}
