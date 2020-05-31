import { Component, OnInit } from '@angular/core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { BaseComponent } from '@app/core';

@Component({
    selector: 'prx-social-metrics',
    templateUrl: './social-metrics.component.html',
    styleUrls: ['./social-metrics.component.scss']
})
export class SocialMetricsComponent extends BaseComponent implements OnInit {
    icons = {
        dw: faAngleDown,
        up: faAngleUp
    };

    metrics = [
        {
            title: 'Impressions',
            icon: 'eye',
            value: '9.5K',
            variation: 0.03
        },
        {
            title: 'Clicks',
            icon: 'mouse-pointer',
            value: '4.3K',
            variation: 3.78
        },
        {
            title: 'Engagements',
            icon: 'pocket',
            value: '2.1K',
            variation: -2.01
        },
        {
            title: 'Posts',
            icon: 'at-sign',
            value: '147',
            variation: 1.07
        }
    ];

    constructor() {
        super();
    }

    ngOnInit() {}
}
