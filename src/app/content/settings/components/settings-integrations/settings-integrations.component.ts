import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'prx-settings-integrations',
    templateUrl: './settings-integrations.component.html',
    styleUrls: ['./settings-integrations.component.scss']
})
export class SettingsIntegrationsComponent implements OnInit {
    apps = [
        {
            name: 'Dockbit',
            integrated: false,
            logo: 'dockbit'
        },
        {
            name: 'Dropbox',
            integrated: false,
            logo: 'dropbox'
        },
        {
            name: 'Monero',
            integrated: false,
            logo: 'monero'
        },
        {
            name: 'Slack',
            integrated: false,
            logo: 'slack'
        },
        {
            name: 'Tech Globe',
            integrated: false,
            logo: 'tech-globe'
        },
        {
            name: 'Whatsapp',
            integrated: false,
            logo: 'whatsapp'
        },
        {
            name: 'Zappier',
            integrated: false,
            logo: 'zappier'
        }
    ];

    constructor() {}

    ngOnInit() {}
}
