import { Injectable } from '@angular/core';
import { ApiService } from '@app/core';
import { Observable } from 'rxjs';
import { Project } from '../models/projects';

const routes = {
    all: () => `/tickets/all`,
    latest: () => `/tickets/latest`
};

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {
    constructor(private api: ApiService) {}

    /**
     * Get 10 users from the server
     */
    getAll(): Observable<Project[]> {
        return this.api.query<Project>(routes.all(), Project);
    }

    /**
     * Get latest projects from the server
     */
    getLatest(): Observable<Project[]> {
        return this.api.query<Project>(routes.latest(), Project);
    }
}
