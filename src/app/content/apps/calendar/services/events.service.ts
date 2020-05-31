import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EventsService {
    public getExternalEvents(): Observable<any> {
        let events: any = [
            {
                title: 'New external event 1',
                description: 'Description for external event 1',
                className: 'fc-event-outline-accent'
            },
            {
                title: 'New external event 2',
                description: 'Description for external event 2',
                className: 'fc-event-outline-accent'
            },
            {
                title: 'New external event 2',
                description: 'Description for external event 2',
                className: 'fc-event-outline-accent'
            }
        ];

        return of(events);
    }

    public getEvents(): Observable<any> {
        const dateObj = new Date();

        const day = dateObj.getUTCDate();
        const month = dateObj.getUTCMonth() + 1;

        const YM =
            dateObj.getUTCFullYear() + '-' + (month < 9 ? '0' + month : month);
        const TODAY = YM + '-' + day;

        let data: any = [
            {
                title: 'All Day Event',
                start: YM + '-01',
                className: 'fc-event-outline-primary'
            },
            {
                title: 'Long Event',
                start: YM + '-07',
                end: YM + '-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: YM + '-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: YM + '-16T16:00:00',
                className: 'fc-event-warning'
            },
            {
                title: 'Conference',
                start: YM + '-' + (day - 1),
                end: YM + '-' + (day + 1),
                className: 'fc-event-primary'
            },
            {
                title: 'Meeting',
                start: YM + '-' + day + 'T10:30:00',
                end: TODAY + 'T12:30:00'
            },
            {
                title: 'Lunch',
                start: TODAY + 'T12:00:00'
            },
            {
                title: 'Meeting',
                start: TODAY + 'T14:30:00',
                className: 'fc-event-primary'
            },
            {
                title: 'Happy Hour',
                start: YM + '-15T17:30:00',
                className: 'fc-event-outline-danger'
            },
            {
                title: 'Dinner',
                start: TODAY + 'T20:00:00',
                description: 'Lorem ipsum dolor sit incid idunt ut',
                className: 'fc-event-success'
            },
            {
                title: 'Birthday Party',
                start: YM + '-' + (day + 1) + 'T07:00:00',
                className: 'fc-event-info'
            }
        ];

        return of(data).pipe(delay(3000));
    }
}
