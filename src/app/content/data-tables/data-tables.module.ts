import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UtilsModule } from '@app/blocks/utils/utils.module';
import { AlertsModule } from '@app/blocks/alerts/alerts.module';
import { AvatarsModule } from '@app/blocks/avatars/avatars.module';
import { NavigationsModule } from '@app/blocks/navigations/navigations.module';
import { ProgressModule } from '@app/blocks/progress/progress.module';

import { SelectedRowsComponent } from './components/shared/selected-rows/selected-rows.component';
import { UserDetailsComponent } from './components/shared/user-details/user-details.component';

import { DataTablesRoutingModule } from './data-tables-routing.module';

@NgModule({
    declarations: [
        ...DataTablesRoutingModule.declarations,
        SelectedRowsComponent,
        UserDetailsComponent
    ],
    imports: [
        SharedModule,
        NgxDatatableModule,
        UtilsModule,
        NavigationsModule,
        AlertsModule,
        ProgressModule,
        AvatarsModule,
        //
        DataTablesRoutingModule
    ]
})
export class DataTablesModule {}
