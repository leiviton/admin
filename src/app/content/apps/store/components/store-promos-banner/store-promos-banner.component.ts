import { Component, OnInit } from '@angular/core';
import {
    faChevronRight,
    faLongArrowAltRight
} from '@fortawesome/free-solid-svg-icons';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
    selector: 'prx-store-promos-banner',
    templateUrl: './store-promos-banner.component.html',
    styleUrls: ['./store-promos-banner.component.scss']
})
export class StorePromosBannerComponent implements OnInit {
    icons = {
        chevRight: faLongArrowAltRight
    };

    swiperConfig: SwiperConfigInterface = {
        keyboard: true,
        scrollbar: false,
        navigation: true,
        slidesPerView: 1,
        pagination: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true
        }
    };

    promos = [
        {
            title: 'Up to 80% discount',
            description: 'Discover our selection of the best Headphones',
            badge: 'What you were waiting for?',
            bg: { img: 'blue-headphones', color: 'rgb(0, 157, 206)' }
        },
        {
            title: 'Shop on the Go',
            description: 'Get the best of our store at your fingertips',
            badge: 'Download the App',
            bg: { img: 'app-deals', color: 'rgb(92, 216, 217)' }
        },
        {
            title: "What's makes you happy",
            description: 'Find the products to make your life easier',
            badge: 'Enjoy your world',
            bg: { img: 'happy-girl', color: 'rgb(240, 197, 87)' }
        },
        {
            title: 'Best performing products',
            description: "What you're looking for in all tech industry",
            badge: 'Get them all',
            bg: { img: 'enjoy', color: 'rgb(226, 162, 113)' }
        }
    ];

    constructor() {}

    ngOnInit(): void {}
}
