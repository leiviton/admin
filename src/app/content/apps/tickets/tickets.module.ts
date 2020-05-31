import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { UtilsModule } from '@app/blocks/utils';

import { TicketsRoutingModule } from './tickets-routing.module';

@NgModule({
    declarations: [...TicketsRoutingModule.declarations],
    imports: [SharedModule, UtilsModule, TicketsRoutingModule]
})
export class TicketsModule {}
