import { Component, OnInit, Input } from '@angular/core';
import { ColorArray } from '../../models/color-value';

@Component({
    selector: 'prx-ui-color-box',
    templateUrl: './ui-color-box.component.html',
    styleUrls: ['./ui-color-box.component.scss']
})
export class UiColorBoxComponent implements OnInit {
    @Input()
    scheme: ColorArray;

    get lightColors() {
        return this.scheme.value.filter(color =>
            color.name.startsWith('light')
        );
    }

    get darkColors() {
        return this.scheme.value.filter(color => color.name.startsWith('dark'));
    }

    get baseColor() {
        return this.scheme.value.filter(color => color.name === 'base')[0];
    }

    constructor() {}

    ngOnInit() {}
}
