import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { EventsService } from '../../services/events.service';
import { BaseComponent } from '@app/core';

@Component({
    selector: 'prx-fullcalendar-basic',
    templateUrl: './fullcalendar-basic.component.html',
    styleUrls: ['./fullcalendar-basic.component.scss']
})
export class FullcalendarBasicComponent extends BaseComponent
    implements OnInit {
    events: any[];
    calendar = {
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },

        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]
    };

    constructor(private _events: EventsService) {
        super();
    }

    ngOnInit() {
        this._events.getEvents().subscribe(events => {
            this.isLoading = false;
            this.events = events;
        });
    }
}
