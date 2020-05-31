import { Component, OnInit } from '@angular/core';
import { StyleService, ColorScheme } from '@app/core';
import { ColorValue, ColorArray } from '../../models/color-value';

@Component({
    selector: 'prx-ui-colors',
    templateUrl: './ui-colors.component.html',
    styleUrls: ['./ui-colors.component.scss']
})
export class UiColorsComponent implements OnInit {
    colors: ColorValue[];
    palette: ColorArray;
    grayScale: ColorArray;

    ColorScheme = ColorScheme;

    constructor(private _styles: StyleService) {
        const allColors = this._styles.properties();

        //const solidColors = allColors.filter(color => typeof color.value === 'string');
        const flatColors = allColors.filter(
            color => color.name === 'GrayScale'
        )[0];
        const palette = allColors.filter(color => color.name === 'palette')[0];
        const colors = allColors.filter(color =>
            color.name.startsWith('Color')
        );

        palette.value = (palette.value as ColorValue[]).map(
            (color: ColorValue) => {
                return {
                    name: color.name.substring(5, color.name.length),
                    value: color.value
                };
            }
        );

        this.palette = palette as ColorArray;
        this.grayScale = flatColors as ColorArray;
        this.colors = colors;
    }

    ngOnInit() {}
}
