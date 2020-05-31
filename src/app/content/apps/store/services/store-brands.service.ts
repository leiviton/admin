import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Brand } from '../models/brands';
import { HttpClient } from '@angular/common/http';

const routes = {
    all: () => `/store/brands/all`,
    featured: (q: number) => `/store/brands/featured`
};

@Injectable({
    providedIn: 'root'
})
export class StoreBrandsService {
    constructor(private _http: HttpClient) {}

    getAll(): Observable<Brand[]> {
        return this._http.get<Brand[]>(routes.all());
    }

    getFeaturedBrands(q: number): Observable<Brand[]> {
        return this._http.get<Brand[]>(routes.featured(q));
    }
}
