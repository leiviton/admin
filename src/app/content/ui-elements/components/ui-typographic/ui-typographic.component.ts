import { Component, OnInit } from '@angular/core';
import { ThemeColor, ColorsService } from '@app/core';

@Component({
    selector: 'prx-ui-typographic',
    templateUrl: './ui-typographic.component.html',
    styleUrls: ['./ui-typographic.component.scss']
})
export class UiTypographicComponent implements OnInit {
    colors: ThemeColor[];

    constructor(private _colors: ColorsService) {
        this.colors = this._colors.ThemeColors;
    }

    ngOnInit() {}
}
