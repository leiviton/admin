import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
    faLongArrowAltLeft,
    faReply,
    faReplyAll,
    faTrashAlt
} from '@fortawesome/free-solid-svg-icons';
import { EmailMessage } from '../../models/email.models';

@Component({
    selector: 'prx-inbox-details',
    templateUrl: './inbox-details.component.html',
    styleUrls: ['./inbox-details.component.scss']
})
export class InboxDetailsComponent implements OnInit {
    icons = {
        longArrowAltLeft: faLongArrowAltLeft,
        reply: faReply,
        replyAll: faReplyAll,
        trashAlt: faTrashAlt
    };

    @Input()
    email: EmailMessage;

    @Output()
    returnToList: EventEmitter<boolean> = new EventEmitter<boolean>();

    get user(): any {
        const from = this.email.from;

        return {
            email: from.email,
            avatar: {
                name: from.name,
                picture: from.picture
            }
        };
    }

    constructor() {}

    ngOnInit() {}

    triggerReturnToList() {
        this.returnToList.emit(true);
    }
}
