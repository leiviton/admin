import { Component, OnInit } from '@angular/core';
import { ColorsService, ColorScheme, ThemeColor } from '@app/core';
import { AlertStyle } from '@app/blocks/alerts/models/alert-style.enum';

@Component({
    selector: 'prx-ui-alerts',
    templateUrl: './ui-alerts.component.html',
    styleUrls: ['./ui-alerts.component.scss']
})
export class UiAlertsComponent implements OnInit {
    ColorScheme = ColorScheme;
    AlertStyle = AlertStyle;

    colors: ThemeColor[];

    constructor(private _colors: ColorsService) {
        this.colors = this._colors.ThemeColors;
    }

    ngOnInit() {}
}
