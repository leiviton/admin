import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { ProgressModule } from '@app/blocks/progress/progress.module';
import { NavigationsModule } from '@app/blocks/navigations/navigations.module';
import { AnalyticsModule } from '@app/blocks/analytics/analytics.module';
import { UtilsModule } from '@app/blocks/utils';

import { SocialRoutingModule } from './social-routing.module';
import { SocialDashboardComponent } from './social-dashboard/social-dashboard.component';
import { SocialMetricsComponent } from './components/social-metrics/social-metrics.component';
import { SocialAudienceRegionComponent } from './components/social-audience-region/social-audience-region.component';
import { SocialEngagingPostComponent } from './components/social-engaging-post/social-engaging-post.component';
import { SocialFbGrowthComponent } from './components/social-fb-growth/social-fb-growth.component';
import { SocialRecentlySubscribersComponent } from './components/social-recently-subscribers/social-recently-subscribers.component';
import { SocialMonthlySubscribersComponent } from './components/social-monthly-subscribers/social-monthly-subscribers.component';
import { SocialTrafficSourcesComponent } from './components/social-traffic-sources/social-traffic-sources.component';
import { SocialTwitterTrendsComponent } from './components/social-twitter-trends/social-twitter-trends.component';
import { SocialYtbVideosComponent } from './components/social-ytb-videos/social-ytb-videos.component';

import '@assets/chartjs.globals.js';

@NgModule({
    declarations: [
        SocialDashboardComponent,
        SocialMetricsComponent,
        SocialAudienceRegionComponent,
        SocialEngagingPostComponent,
        SocialFbGrowthComponent,
        SocialRecentlySubscribersComponent,
        SocialMonthlySubscribersComponent,
        SocialTrafficSourcesComponent,
        SocialTwitterTrendsComponent,
        SocialYtbVideosComponent
    ],
    imports: [
        SharedModule,
        UtilsModule,
        NavigationsModule,
        ProgressModule,
        AnalyticsModule,
        SocialRoutingModule
    ]
})
export class SocialModule {}
