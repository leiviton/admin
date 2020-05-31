import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'prx-social-ytb-videos',
    templateUrl: './social-ytb-videos.component.html',
    styleUrls: ['./social-ytb-videos.component.scss']
})
export class SocialYtbVideosComponent implements OnInit {
    ytbVideos = [
        {
            name: 'Installing and configuring Proxima template',
            uploaded: '7 weeks ago',
            views: { actual: 3009984, goal: 4000000 },
            likes: 370265
        },
        {
            name: 'How Proxima can help you boost your solution',
            uploaded: '10 days ago',
            views: { actual: 2024225, goal: 3000000 },
            likes: 446840
        },
        {
            name: 'A new way to develop for the web',
            uploaded: '8 months ago',
            views: { actual: 1020083, goal: 3000000 },
            likes: 254304
        }
    ];

    constructor() {}

    ngOnInit(): void {}
}
