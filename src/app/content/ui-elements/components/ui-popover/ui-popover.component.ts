import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'prx-ui-popover',
    templateUrl: './ui-popover.component.html',
    styleUrls: ['./ui-popover.component.scss']
})
export class UiPopoverComponent implements OnInit {
    context = {
        message: 'Hello !',
        title: 'Popover Title'
    };

    constructor() {}

    ngOnInit() {}
}
