import { Component, OnInit } from '@angular/core';
import {
    ScrollToService,
    ScrollToConfigOptions
} from '@nicky-lenaers/ngx-scroll-to';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {
    faChevronRight,
    faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import { StoreCategoriesService } from '../../services/store-categories.service';
import { ProductCategory } from '../../models/product';
import { BreadcrumType } from '@app/blocks/navigations/breadcrum/breadcrum.component';

@Component({
    selector: 'prx-store-categories',
    templateUrl: './store-categories.component.html',
    styleUrls: ['./store-categories.component.scss']
})
export class StoreCategoriesComponent implements OnInit {
    categories: ProductCategory[];

    breadcrum: BreadcrumType[] = [
        {
            label: 'Store',
            url: ['../../home']
        },
        {
            label: 'Categories'
        }
    ];

    categoriesConfig: SwiperConfigInterface = {
        scrollbar: false,
        slidesPerView: 3,
        pagination: false,
        navigation: {
            nextEl: '.cat-button-next',
            prevEl: '.cat-button-prev'
        },
        loop: true
    };

    icons = {
        chevLeft: faChevronLeft,
        chevRight: faChevronRight
    };

    constructor(
        private _categories: StoreCategoriesService,
        private _scrollToService: ScrollToService
    ) {}

    ngOnInit() {
        this._categories
            .getWithSubCategories()
            .subscribe(categories => (this.categories = categories));
    }

    scrollTo(target: string) {
        const config: ScrollToConfigOptions = {
            container: 'categories-container',
            target
        };

        this._scrollToService.scrollTo(config);
    }
}
