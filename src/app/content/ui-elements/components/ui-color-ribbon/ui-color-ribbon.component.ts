import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '@app/core';
import { ColorValue } from '../../models/color-value';

@Component({
    selector: 'prx-ui-color-ribbon',
    templateUrl: './ui-color-ribbon.component.html',
    styleUrls: ['./ui-color-ribbon.component.scss']
})
export class UiColorRibbonComponent extends BaseComponent implements OnInit {
    @Input()
    colors: ColorValue[];

    constructor() {
        super('color-pallete');
    }

    ngOnInit() {}
}
