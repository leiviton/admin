import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { NavigationsModule } from '@app/blocks/navigations/navigations.module';
import { AnalyticsModule } from '@app/blocks/analytics/analytics.module';
import { UtilsModule } from '@app/blocks/utils';
import { AlertsModule } from '@app/blocks/alerts/alerts.module';
import { ProgressModule } from '@app/blocks/progress/progress.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { Covid19RoutingModule } from './covid-19-routing.module';
import { Covid19MetricsComponent } from './components/covid19-metrics/covid19-metrics.component';
import { Covid19GlobalMetricComponent } from './components/covid19-global-metric/covid19-global-metric.component';
import { Covid19DashboardComponent } from './covid19-dashboard/covid19-dashboard.component';

import { Covid19RecoveryRatioComponent } from './charts/covid19-recovery-ratio/covid19-recovery-ratio.component';
import { Covid19CasesWorldwideComponent } from './components/covid19-cases-worldwide/covid19-cases-worldwide.component';

import '@assets/chartjs.globals.js';
import { Covid19CasesByCountryComponent } from './components/covid19-cases-by-country/covid19-cases-by-country.component';
import { Covid19PercentageOfCasesComponent } from './charts/covid19-percentage-of-cases/covid19-percentage-of-cases.component';
import { SearchCountryPipe } from './pipes/search-country.pipe';
import { Covid19WorldMapComponent } from './charts/covid19-world-map/covid19-world-map.component';
import { Covid19CountriesDistributionComponent } from './components/covid19-countries-distribution/covid19-countries-distribution.component';
import { Covid19CountriesBarsComponent } from './charts/covid19-countries-bars/covid19-countries-bars.component';
import { Covid19HistoryWorldComponent } from './charts/covid19-history-world/covid19-history-world.component';
import { Covid19PrecautionsComponent } from './components/covid19-precautions/covid19-precautions.component';

@NgModule({
    declarations: [
        Covid19DashboardComponent,
        Covid19MetricsComponent,
        Covid19GlobalMetricComponent,
        Covid19RecoveryRatioComponent,
        Covid19CasesWorldwideComponent,
        Covid19CasesByCountryComponent,
        Covid19PercentageOfCasesComponent,
        SearchCountryPipe,
        Covid19WorldMapComponent,
        Covid19CountriesDistributionComponent,
        Covid19CountriesBarsComponent,
        Covid19HistoryWorldComponent,
        Covid19PrecautionsComponent
    ],
    imports: [
        SharedModule,
        NavigationsModule,
        AlertsModule,
        ProgressModule,
        AnalyticsModule,
        UtilsModule,
        NgxDatatableModule,
        Covid19RoutingModule
    ]
})
export class Covid19Module {}
