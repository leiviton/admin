import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';

import { FullcalendarBasicComponent } from './components/fullcalendar-basic/fullcalendar-basic.component';

const routes: Routes = [
    // Module is lazy loaded, see app-routing.module.ts
    {
        path: '',
        component: FullcalendarBasicComponent,
        data: { title: extract('FullCalendar - Basic') }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CalendarRoutingModule {
    static declarations = [FullcalendarBasicComponent];
}
