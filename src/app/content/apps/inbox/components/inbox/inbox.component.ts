import { Component, OnInit, HostBinding } from '@angular/core';
import { EmailMessage } from '../../models/email.models';

import { Logger } from '@app/core';
const logger = new Logger('InboxComponent');

@Component({
    selector: 'prx-inbox',
    templateUrl: './inbox.component.html',
    styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
    selectedEmail: EmailMessage;

    @HostBinding('class.email-loaded')
    get isSelectedEmail(): boolean {
        return this.selectedEmail !== undefined;
    }

    constructor() {}

    ngOnInit() {}

    onEmailSelected(message: EmailMessage) {
        logger.debug('Selected Email', message);
        this.selectedEmail = message;
    }

    onReturnToList(returned: boolean) {
        logger.debug('Returning to List', returned);
        if (returned) {
            this.selectedEmail = undefined;
        }
    }
}
