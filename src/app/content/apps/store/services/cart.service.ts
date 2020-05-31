import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private _products: Product[];

    constructor() {}

    add(product: Product) {
        this._products.push(product);
    }

    getProducts() {
        return this._products;
    }
}
