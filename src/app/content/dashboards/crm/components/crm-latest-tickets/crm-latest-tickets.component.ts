import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@app/core';
import { Ticket, TicketUser } from '@app/content/apps/tickets/models/tickets';
import { TicketsService } from '@app/content/apps/tickets/services/tickets.service';
import { AvatarListItem } from '@app/blocks/avatars/models/avatar';
import { ColumnMode } from '@swimlane/ngx-datatable';

import {
    faCircle,
    faChevronCircleUp,
    faChevronCircleDown,
    faChevronCircleLeft
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'prx-crm-latest-tickets',
    templateUrl: './crm-latest-tickets.component.html',
    styleUrls: ['./crm-latest-tickets.component.scss']
})
export class CrmLatestTicketsComponent extends BaseComponent implements OnInit {
    tickets: Ticket[];

    ColumnMode = ColumnMode;

    icons = {
        dot: faCircle,
        up: faChevronCircleUp,
        down: faChevronCircleDown,
        left: faChevronCircleLeft
    };

    constructor(private _tickets: TicketsService) {
        super();
    }

    ngOnInit() {
        this._tickets.getLatest().subscribe(tickets => {
            this.isLoading = false;
            this.tickets = tickets;
        });
    }

    getPriorityIcon(priority: string) {
        switch (priority) {
            case 'high':
                return this.icons.up;
            case 'medium':
                return this.icons.left;
            case 'low':
                return this.icons.down;
        }

        return this.icons.dot;
    }

    asigneeAvatars(asignee: TicketUser[]): AvatarListItem[] {
        return asignee.map(member => {
            return {
                avatar: {
                    name: member.name,
                    picture: member.picture.thumbnail
                }
            };
        });
    }
}
