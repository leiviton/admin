import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { AvatarsModule } from '@app/blocks/avatars/avatars.module';
import { AnalyticsModule } from '@app/blocks/analytics/analytics.module';
import { NavigationsModule } from '@app/blocks/navigations/navigations.module';
import { TimelinesModule } from '@app/blocks/timelines/timelines.module';
import { UtilsModule } from '@app/blocks/utils';
import { ProgressModule } from '@app/blocks/progress/progress.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CrmRoutingModule } from './crm-routing.module';
import { CrmDashboardComponent } from './crm-dashboard/crm-dashboard.component';
import { CrmLatestTicketsComponent } from './components/crm-latest-tickets/crm-latest-tickets.component';
import { CrmNewsComponent } from './components/crm-news/crm-news.component';
import { CrmProjectsComponent } from './components/crm-projects/crm-projects.component';
import { CrmRevenueComponent } from './components/crm-revenue/crm-revenue.component';
import { CrmSalesComponent } from './components/crm-sales/crm-sales.component';
import { CrmStatisticsComponent } from './components/crm-statistics/crm-statistics.component';
import { CrmTasksComponent } from './components/crm-tasks/crm-tasks.component';

import '@assets/chartjs.rounded-bars.extension.js';
import '@assets/chartjs.globals.js';

@NgModule({
    declarations: [
        CrmDashboardComponent,
        CrmLatestTicketsComponent,
        CrmNewsComponent,
        CrmProjectsComponent,
        CrmRevenueComponent,
        CrmSalesComponent,
        CrmStatisticsComponent,
        CrmTasksComponent
    ],
    imports: [
        SharedModule,
        AvatarsModule,
        AnalyticsModule,
        NavigationsModule,
        TimelinesModule,
        UtilsModule,
        ProgressModule,
        NgxDatatableModule,

        CrmRoutingModule
    ]
})
export class CrmModule {}
