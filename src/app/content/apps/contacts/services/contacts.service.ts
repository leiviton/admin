import { Injectable } from '@angular/core';
import { ApiService } from '@app/core';
import { Contact, Project } from '../models/contact';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const PerPage: number = 10;

const routes = {
    all: () => `/contacts/all`,
    paged: (count: number) => `/contacts/all/${count}`,
    single: (id: string) => `/contacts/${id}`,
    projects: (id: string) => `/contacts/${id}/projects`
};

@Injectable({
    providedIn: 'root'
})
export class ContactsService {
    private _viewing: Contact;

    get viewing(): Contact {
        return this._viewing;
    }

    constructor(private api: ApiService) {}

    /**
     * Get 10 users from the server
     */
    getAll(): Observable<Contact[]> {
        return this.api.query<Contact>(routes.all(), Contact);
    }

    /**
     * This is just a fake pagination sample, our API actually doesn't get the users paged
     * It just fetch N users from the server
     * @param page The page to fetch from the server
     */
    getPaged(page: number): Observable<Contact[]> {
        return this.api.query<Contact>(routes.paged(page * PerPage), Contact);
    }

    /**
     * This method retrieves @count users from the server
     * @param count The count of users to retrieve
     */
    getByCount(count: number): Observable<Contact[]> {
        return this.api.query<Contact>(routes.paged(count), Contact);
    }

    /**
     * This method retrieves the user whose id is the param value
     * @param id The id of the user you want to retrieve
     */
    getById(id: string): Observable<Contact> {
        const observable = this.api
            .get<Contact>(routes.single(id), Contact)
            .pipe(
                map((contact: Contact) => {
                    this._viewing = contact;

                    return contact;
                })
            );

        return observable;
    }

    getSimilarProfiles(): Observable<Contact[]> {
        return this.getByCount(6);
    }

    getContactProjects(id: string): Observable<Project[]> {
        return this.api.query<Project>(routes.projects(id), Project);
    }
}
