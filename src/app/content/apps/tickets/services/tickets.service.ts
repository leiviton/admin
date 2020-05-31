import { Injectable } from '@angular/core';
import { ApiService } from '@app/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/tickets';

const routes = {
    all: () => `/tickets/all`,
    latest: () => `/tickets/latest`
};

@Injectable({
    providedIn: 'root'
})
export class TicketsService {
    constructor(private api: ApiService) {}

    /**
     * Get 10 users from the server
     */
    getAll(): Observable<Ticket[]> {
        return this.api.query<Ticket>(routes.all(), Ticket);
    }

    /**
     * Get latest projects from the server
     */
    getLatest(): Observable<Ticket[]> {
        return this.api.query<Ticket>(routes.latest(), Ticket);
    }
}
