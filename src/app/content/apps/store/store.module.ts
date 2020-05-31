import { NgModule } from '@angular/core';
import { StoreRoutingModule } from './store-routing.module';
import { SharedModule } from '@app/shared';
import { UtilsModule } from '@app/blocks/utils';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { NavigationsModule } from '@app/blocks/navigations/navigations.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { StorePromosBannerComponent } from './components/store-promos-banner/store-promos-banner.component';
import { StoreProductsComponent } from './components/store-products/store-products.component';
import { StoreHeaderComponent } from './components/store-header/store-header.component';
import { StoreFeaturedBrandsComponent } from './components/store-featured-brands/store-featured-brands.component';
import { StoreRecentlyViewedComponent } from './components/store-recently-viewed/store-recently-viewed.component';
import { StoreMainProductsComponent } from './components/store-main-products/store-main-products.component';
import { StoreProductCardComponent } from './components/store-product-card/store-product-card.component';
import { ProductTitleComponent } from './components/product-title/product-title.component';
import { AvatarsModule } from '@app/blocks/avatars/avatars.module';

@NgModule({
    declarations: [
        ...StoreRoutingModule.declarations,
        StorePromosBannerComponent,
        StoreProductsComponent,
        StoreHeaderComponent,
        StoreFeaturedBrandsComponent,
        StoreRecentlyViewedComponent,
        StoreMainProductsComponent,
        StoreProductCardComponent,
        ProductTitleComponent
    ],
    imports: [
        SharedModule,
        UtilsModule,
        NavigationsModule,
        SwiperModule,
        ScrollToModule,
        AvatarsModule,
        StoreRoutingModule
    ]
})
export class StoreModule {}
