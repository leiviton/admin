import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'prx-ui-tab-content',
    templateUrl: './ui-tab-content.component.html',
    styleUrls: ['./ui-tab-content.component.scss']
})
export class UiTabContentComponent implements OnInit {
    @Input()
    content: number = 1;

    constructor() {}

    ngOnInit() {}
}
