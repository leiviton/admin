import { Component, OnInit, ViewChild } from '@angular/core';
import { faBell, faDizzy, faStar } from '@fortawesome/free-solid-svg-icons';
import { ColorScheme } from '@app/core';

@Component({
    selector: 'prx-ui-tabs',
    templateUrl: './ui-tabs.component.html',
    styleUrls: ['./ui-tabs.component.scss']
})
export class UiTabsComponent implements OnInit {
    ColorScheme = ColorScheme;
    customStyle: string = '-clean';
    currentJustify: string = 'start';

    icons = {
        bell: faBell,
        dizzy: faDizzy,
        star: faStar
    };

    constructor() {}

    ngOnInit() {}
}
