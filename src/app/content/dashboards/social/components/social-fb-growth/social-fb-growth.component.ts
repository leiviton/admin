import { Component, OnInit } from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'prx-social-fb-growth',
    templateUrl: './social-fb-growth.component.html',
    styleUrls: ['./social-fb-growth.component.scss']
})
export class SocialFbGrowthComponent implements OnInit {
    icons = {
        angleUp: faAngleUp
    };

    fbAudienceGrowth = [
        {
            key: 'Total subscribers',
            value: 64874
        },
        {
            key: 'Paid likes',
            value: 783
        },
        {
            key: 'Organic likes',
            value: 675
        }
    ];

    constructor() {}

    ngOnInit(): void {}
}
