import { Injectable } from '@angular/core';
import { ApiService } from '@app/core';
import { Observable } from 'rxjs';
import { EmailResponse } from '../models/email.models';

const routes = {
    emails: () => `/emails`
};

@Injectable({
    providedIn: 'root'
})
export class EmailsService {
    constructor(private api: ApiService) {}

    getLatestEmails(): Observable<EmailResponse[]> {
        return this.api.query<EmailResponse>(routes.emails(), EmailResponse);
    }
}
