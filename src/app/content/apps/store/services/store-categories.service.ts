import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductCategory } from '../models/product';

const routes = {
    all: () => `/store/categories/all`,
    featured: (q?: number) => `/store/categories/featured${q ? '/' + q : ''}`
};

@Injectable({
    providedIn: 'root'
})
export class StoreCategoriesService {
    constructor(private _http: HttpClient) {}

    getWithSubCategories(): Observable<ProductCategory[]> {
        return this._http.get<ProductCategory[]>(routes.all());
    }

    getFeaturedCategories(q?: number): Observable<ProductCategory[]> {
        return this._http.get<ProductCategory[]>(routes.featured(q));
    }
}
