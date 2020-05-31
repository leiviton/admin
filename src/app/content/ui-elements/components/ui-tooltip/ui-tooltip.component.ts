import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'prx-ui-tooltip',
    templateUrl: './ui-tooltip.component.html',
    styleUrls: ['./ui-tooltip.component.scss']
})
export class UiTooltipComponent implements OnInit {
    message = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';

    constructor() {}

    ngOnInit() {}
}
