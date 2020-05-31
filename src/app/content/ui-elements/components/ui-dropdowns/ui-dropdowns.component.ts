import { Component, OnInit } from '@angular/core';
import { ColorScheme } from '@app/core';

@Component({
    selector: 'prx-ui-dropdowns',
    templateUrl: './ui-dropdowns.component.html',
    styleUrls: ['./ui-dropdowns.component.scss']
})
export class UiDropdownsComponent implements OnInit {
    ColorScheme = ColorScheme;

    constructor() {}

    ngOnInit() {}
}
