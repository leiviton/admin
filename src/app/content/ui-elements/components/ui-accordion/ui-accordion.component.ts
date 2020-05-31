import { Component, OnInit } from '@angular/core';
import { ColorScheme, ThemeColor, ColorsService } from '@app/core';

@Component({
    selector: 'prx-ui-accordion',
    templateUrl: './ui-accordion.component.html',
    styleUrls: ['./ui-accordion.component.scss']
})
export class UiAccordionComponent implements OnInit {
    ColorScheme = ColorScheme;
    colors: ThemeColor[];
    currentColor: ThemeColor;
    styleCollapsed: boolean;
    icons = ['bell', 'tag', 'pie-chart'];

    constructor(private _colors: ColorsService) {
        this.colors = this._colors.ThemeColors;

        this.currentColor = this.colors.find(e => e.value == 'primary');
    }

    ngOnInit() {}

    applyColor(color: ThemeColor) {
        this.currentColor = color;
    }
}
