import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { UtilsModule } from '@app/blocks/utils';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!

import { CalendarRoutingModule } from './calendar-routing.module';

@NgModule({
    declarations: [...CalendarRoutingModule.declarations],
    imports: [
        SharedModule,
        UtilsModule,
        FullCalendarModule,
        CalendarRoutingModule
    ]
})
export class CalendarModule {}
