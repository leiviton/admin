import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../models/invoice.model';
import { ApiService } from '@app/core';

const routes = {
    all: () => `/invoices/all`,
    single: (id: string) => `/invoices/${id}`,
    details: (id: string) => `/invoices/${id}/details`
};

@Injectable({
    providedIn: 'root'
})
export class InvoiceService {
    constructor(private api: ApiService) {}

    getAllInvoices(): Observable<Invoice[]> {
        return this.api.query<Invoice>(routes.all(), Invoice);
    }

    getInvoiceDetails(id: string): Observable<Invoice> {
        return this.api.get<Invoice>(routes.details(id), Invoice);
    }

    getInvoiceById(id: string): Observable<Invoice> {
        return this.api.get<Invoice>(routes.single(id), Invoice);
    }
}
