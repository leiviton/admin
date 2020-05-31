import { Component, OnInit } from '@angular/core';
import { BreadcrumType } from '@app/blocks/navigations/breadcrum/breadcrum.component';
import {
    faChevronRight,
    faCircle,
    faLongArrowAltRight,
    faGenderless
} from '@fortawesome/free-solid-svg-icons';
import { ColorScheme } from '@app/core';

@Component({
    selector: 'prx-ui-navigations',
    templateUrl: './ui-navigations.component.html',
    styleUrls: ['./ui-navigations.component.scss']
})
export class UiNavigationsComponent implements OnInit {
    ColorScheme = ColorScheme;

    icons = {
        chevronRight: faChevronRight,
        circle: faGenderless,
        arrowRight: faLongArrowAltRight
    };

    breadcrum: BreadcrumType[] = [
        {
            label: 'Billing',
            url: ['/billing']
        },
        {
            label: `Active item`
        }
    ];

    constructor() {}

    ngOnInit() {}
}
