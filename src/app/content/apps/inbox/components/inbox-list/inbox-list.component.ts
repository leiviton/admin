import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmailResponse, EmailMessage } from '../../models/email.models';
import { EmailsService } from '../../services/emails.service';
import { Avatar } from '@app/blocks/avatars/models/avatar';

import { Logger, BaseComponent } from '@app/core';
const logger = new Logger('InboxListComponent');

@Component({
    selector: 'prx-inbox-list',
    templateUrl: './inbox-list.component.html',
    styleUrls: ['./inbox-list.component.scss']
})
export class InboxListComponent extends BaseComponent implements OnInit {
    messages: EmailResponse[] = [];
    selectedMessage: EmailMessage;

    @Output()
    emailSelected: EventEmitter<EmailMessage> = new EventEmitter<
        EmailMessage
    >();

    constructor(private emailService: EmailsService) {
        super();
    }

    ngOnInit() {
        this.emailService
            .getLatestEmails()
            .pipe()
            .subscribe((messages: EmailResponse[]) => {
                this.isLoading = false;
                this.messages = messages;
            });
    }

    displayMessage(message: EmailMessage) {
        this.selectedMessage = message;
        this.emailSelected.emit(message);

        logger.debug(this.selectedMessage);
    }

    fromMessage(message: EmailMessage): Avatar {
        return {
            name: message.from.name,
            picture: message.from.picture
        };
    }
}
