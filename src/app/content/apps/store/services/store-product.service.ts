import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, ProductDetails } from '../models/product';
import { ProductFilter } from '../models/product-filter';
import { HttpClient, HttpParams } from '@angular/common/http';

const routes = {
    all: () => `/store/products/all`,
    recently: () => `/store/products/recently`,
    details: (slug: string) => `/store/products/${slug}/details`
};

@Injectable({
    providedIn: 'root'
})
export class StoreProductService {
    constructor(private _http: HttpClient) {}

    getRecentlyViewedProducts(): Observable<Product[]> {
        let params = new HttpParams();

        return this._http.get<Product[]>(routes.recently(), { params });
    }

    getProductsByCategory(category: string): Observable<Product[]> {
        let params = new HttpParams();
        params.set('category', category);

        return this._http.get<Product[]>(routes.all(), { params });
    }

    getFiltered(filter: ProductFilter) {
        let params = new HttpParams();

        Object.keys(filter).forEach(key => {
            const value = filter[key];

            if (value) {
                params = params.set(key, value);
            }
        });

        return this._http.get<Product[]>(routes.all(), { params });
    }

    getProductDetails(slug: string) {
        return this._http.get<Product>(routes.details(slug));
    }
}
