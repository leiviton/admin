import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'prx-store-product-card',
    templateUrl: './store-product-card.component.html',
    styleUrls: ['./store-product-card.component.scss']
})
export class StoreProductCardComponent implements OnInit {
    icons = {
        heart: faHeart,
        cart: faCartPlus
    };

    @Input()
    product: Product;

    constructor(private _cart: CartService) {}

    ngOnInit(): void {}

    addToCart() {
        this._cart.add(this.product);
    }
}
