import { Component, OnInit } from '@angular/core';
import {
    faCheck,
    faChevronLeft,
    faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'prx-sticky-bar',
    templateUrl: './sticky-bar.component.html',
    styleUrls: ['./sticky-bar.component.scss']
})
export class StickyBarComponent implements OnInit {
    icons = {
        check: faCheck,
        chevronLeft: faChevronLeft,
        calendar: faCalendarAlt
    };

    channels = [
        {
            name: 'Website',
            icon: 'at-sign'
        },
        {
            name: 'Facebook',
            icon: 'facebook'
        },
        {
            name: 'Newsletter',
            icon: 'mail'
        },
        {
            name: 'Other',
            icon: 'bell'
        }
    ];

    constructor() {}

    ngOnInit() {}
}
