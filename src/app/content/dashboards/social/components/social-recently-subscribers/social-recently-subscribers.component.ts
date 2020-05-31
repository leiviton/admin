import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'prx-social-recently-subscribers',
    templateUrl: './social-recently-subscribers.component.html',
    styleUrls: ['./social-recently-subscribers.component.scss']
})
export class SocialRecentlySubscribersComponent implements OnInit {
    recentlySubscribers = [
        {
            user: 'axelle guillot',
            picture: 'https://randomuser.me/api/portraits/thumb/women/94.jpg',
            email: 'axelle.guillot@example.com',
            network: 'facebook',
            date: '1 hours ago'
        },
        {
            user: 'josep garcia',
            picture: 'https://randomuser.me/api/portraits/thumb/men/3.jpg',
            email: 'josep.garcia@example.com',
            network: 'twitter',
            date: '9 mins ago'
        },
        {
            user: 'lemuel campos',
            picture: 'https://randomuser.me/api/portraits/thumb/men/76.jpg',
            email: 'lemuel.campos@example.com',
            network: 'youtube',
            date: '8 mins ago'
        },
        {
            user: 'carolyn stone',
            picture: 'https://randomuser.me/api/portraits/thumb/women/62.jpg',
            email: 'carolyn.stone@example.com',
            network: 'youtube',
            date: '16 hours ago'
        }
    ];

    constructor() {}

    ngOnInit(): void {}
}
