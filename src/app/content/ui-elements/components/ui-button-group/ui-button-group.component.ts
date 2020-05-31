import { Component, OnInit } from '@angular/core';
import {
    faItalic,
    faBold,
    faUnderline,
    faStrikethrough,
    faAlignCenter,
    faAlignJustify,
    faAlignLeft,
    faAlignRight,
    faFont,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'prx-ui-button-group',
    templateUrl: './ui-button-group.component.html',
    styleUrls: ['./ui-button-group.component.scss']
})
export class UiButtonGroupComponent implements OnInit {
    checkModel: any = { left: false, middle: true, right: false };
    radioModel = 'Middle';

    icons = {
        italic: faItalic,
        bold: faBold,
        underline: faUnderline,
        strike: faStrikethrough,
        acenter: faAlignCenter,
        ajustify: faAlignJustify,
        aleft: faAlignLeft,
        aright: faAlignRight,
        font: faFont,
        angleDown: faAngleDown
    };

    constructor() {}

    ngOnInit() {}
}
