import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {
    faChevronLeft,
    faChevronRight,
    faHeart,
    faCartPlus
} from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../models/product';
import { StoreProductService } from '../../services/store-product.service';
import { BaseComponent } from '@app/core';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'prx-store-recently-viewed',
    templateUrl: './store-recently-viewed.component.html',
    styleUrls: ['./store-recently-viewed.component.scss']
})
export class StoreRecentlyViewedComponent extends BaseComponent
    implements OnInit {
    products: Product[];

    sliderConfig: SwiperConfigInterface = {
        scrollbar: false,
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: false,
        loop: true,
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev'
        },
        breakpoints: {
            1200: { slidesPerView: 4, spaceBetween: 30 },
            992: { slidesPerView: 3, spaceBetween: 25 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            320: { slidesPerView: 1, spaceBetween: 10 }
        }
    };

    icons = {
        chevLeft: faChevronLeft,
        chevRight: faChevronRight,
        cart: faCartPlus
    };

    constructor(private _products: StoreProductService) {
        super();
    }

    ngOnInit(): void {
        this.isLoading = true;
        this._products
            .getRecentlyViewedProducts()
            .pipe(
                finalize(() => {
                    this.isLoading = false;
                })
            )
            .subscribe(products => (this.products = products));
    }
}
