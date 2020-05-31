import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'prx-settings-shell',
    templateUrl: './settings-shell.component.html',
    styleUrls: ['./settings-shell.component.scss']
})
export class SettingsShellComponent implements OnInit {
    navigation = [
        { path: 'account', icon: 'feather' },
        { path: 'personal', icon: 'user' },
        { path: 'billing', icon: 'credit-card' },
        { path: 'notifications', icon: 'bell' },
        { path: 'integrations', icon: 'grid' },
        { path: 'security', icon: 'shield' }
    ];

    constructor() {}

    ngOnInit() {}
}
