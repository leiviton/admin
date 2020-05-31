import { Component, OnInit } from '@angular/core';
import { ColorsService, ThemeColor, ColorScheme } from '@app/core';

@Component({
    selector: 'prx-ui-progress',
    templateUrl: './ui-progress.component.html',
    styleUrls: ['./ui-progress.component.scss']
})
export class UiProgressComponent implements OnInit {
    ColorScheme = ColorScheme;
    colors: ThemeColor[];

    constructor(private _colors: ColorsService) {
        this.colors = this._colors.ThemeColors;
    }

    ngOnInit() {}
}
