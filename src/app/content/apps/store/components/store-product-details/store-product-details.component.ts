import { Component, OnInit, Input } from '@angular/core';
import { StoreProductService } from '../../services/store-product.service';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumType } from '@app/blocks/navigations/breadcrum/breadcrum.component';
import { ColorScheme } from '@app/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {
    faHeart,
    faThumbsUp,
    faThumbsDown
} from '@fortawesome/free-regular-svg-icons';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faPinterest
} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'prx-store-product-details',
    templateUrl: './store-product-details.component.html',
    styleUrls: ['./store-product-details.component.scss']
})
export class StoreProductDetailsComponent implements OnInit {
    ColorScheme = ColorScheme;
    productSlug: string;

    breadcrum: BreadcrumType[] = [
        {
            label: 'Store',
            url: ['../../home']
        },
        {
            label: 'Products',
            url: ['../']
        }
    ];

    product: Product;
    image: string;
    selectedImage: string;
    selectedColor: string;

    icons = {
        heart: faHeart,
        thumbs: {
            up: faThumbsUp,
            down: faThumbsDown
        }
    };

    networks = [
        { icon: faFacebook },
        { icon: faTwitter },
        { icon: faInstagram },
        { icon: faPinterest }
    ];

    sliderConfig: SwiperConfigInterface = {
        spaceBetween: 30,
        scrollbar: false,
        slidesPerView: 4,
        pagination: false,

        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev'
        },
        breakpoints: {
            1200: { slidesPerView: 5, spaceBetween: 30 },
            992: { slidesPerView: 3, spaceBetween: 25 },
            //768: { slidesPerView: 2, spaceBetween: 10 },
            320: { slidesPerView: 2, spaceBetween: 10 }
        }
    };

    //For demo purposes
    reviewsSummary = [
        { rate: 5, percent: 87, count: 178 },
        { rate: 4, percent: 16, count: 65 },
        { rate: 3, percent: 6, count: 21 },
        { rate: 4, percent: 2, count: 3 },
        { rate: 1, percent: 0, count: 1 }
    ];

    constructor(
        private _products: StoreProductService,
        private _activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this._activatedRoute.paramMap.subscribe(params => {
            this.productSlug = params.get('id');

            this._products
                .getProductDetails(this.productSlug)
                .subscribe(product => {
                    this.product = product;
                    this.selectedImage = product.details.availability.images[0];
                    this.selectedColor = product.details.availability.colors[0];

                    const activeItem = {
                        label: this.product.name
                    };

                    this.breadcrum.push(activeItem);
                });
        });
    }

    updateImage(image: string) {
        this.selectedImage = image;
    }

    updateColor(color: string) {
        this.selectedColor = color;
    }
}
