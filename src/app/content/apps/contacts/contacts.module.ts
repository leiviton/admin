import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { UtilsModule } from '@app/blocks/utils';
import { AvatarsModule } from '@app/blocks/avatars/avatars.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NavigationsModule } from '@app/blocks/navigations/navigations.module';
import { ProgressModule } from '@app/blocks/progress/progress.module';
import { AnalyticsModule } from '@app/blocks/analytics/analytics.module';
import { QuillModule } from 'ngx-quill';

import { TimelinesModule } from '@app/blocks/timelines/timelines.module';
import { ContactsRoutingModule } from './contacts-routing.module';

@NgModule({
    declarations: [...ContactsRoutingModule.declarations],
    imports: [
        SharedModule,
        UtilsModule,
        AvatarsModule,
        NavigationsModule,
        TimelinesModule,
        ProgressModule,
        AnalyticsModule,
        NgxDatatableModule,
        QuillModule,

        ContactsRoutingModule
    ]
})
export class ContactsModule {}
