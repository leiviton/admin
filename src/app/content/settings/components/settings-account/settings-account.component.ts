import { Component, OnInit } from '@angular/core';
import { Avatar } from '@app/blocks/avatars/models/avatar';

@Component({
    selector: 'prx-settings-account',
    templateUrl: './settings-account.component.html',
    styleUrls: ['./settings-account.component.scss']
})
export class SettingsAccountComponent implements OnInit {
    private _avatar: Avatar = {
        name: 'John Doe'
    };

    get avatar(): Avatar {
        return this._avatar;
    }
    set avatar(value: Avatar) {
        this._avatar = value;
    }

    layouts = [
        {
            name: 'Sidebar',
            icon: 'sidebar-layout'
        },
        {
            name: 'Horizontal',
            icon: 'horizontal-layout'
        }
    ];

    languages = [
        { name: 'English', code: 'EN' },
        { name: 'Español', code: 'ES' },
        { name: 'French', code: 'FR' }
    ];

    avatarUrl = '';

    constructor() {}

    ngOnInit() {}

    onUrlChanged(avatar: Avatar) {
        this.avatar = avatar;
    }
}
