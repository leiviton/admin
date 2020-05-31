import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '@app/core';
import { FormGroup, FormControl } from '@angular/forms';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'prx-settings-notifications',
    templateUrl: './settings-notifications.component.html',
    styleUrls: ['./settings-notifications.component.scss']
})
export class SettingsNotificationsComponent extends BaseFormComponent
    implements OnInit {
    icons = {
        envelope: faEnvelope
    };

    activities = [
        {
            key: 'pushNotifications',
            name: 'Push Notifications',
            controls: [
                {
                    key: 'pushReactions',
                    name: 'Reactions',
                    description: 'Notify me when someone react to my posts',
                    value: true
                },
                {
                    key: 'pushSounds',
                    name: 'Notification sounds',
                    description: 'Play a sound for incoming notifications',
                    value: true
                },
                {
                    key: 'pushChat',
                    name: 'Chat notifications',
                    description:
                        'Notify me when someone send me private messages',
                    value: true
                },
                {
                    key: 'pushTag',
                    name: 'Tag notifications',
                    description:
                        'Receive a push notification when someoe tag me',
                    value: false
                }
            ]
        },
        {
            key: 'myNetwork',
            name: 'Send me notifications regarding my network activity',
            controls: [
                {
                    key: 'networkNews',
                    name: 'News',
                    description:
                        'A weekly email with most important updates from people you follow',
                    value: true
                },
                {
                    key: 'networkMeetups',
                    name: 'Meetups near me',
                    description:
                        'Notify me when a Meetup is posted near to my location',
                    value: false
                },
                {
                    key: 'networkAccount',
                    name: 'Account activity',
                    description:
                        'Get important notifications regarding my account activity',
                    value: true
                }
            ]
        }
    ];

    constructor() {
        super();
        this.createForm();
    }

    ngOnInit() {}

    private createForm() {
        let groups: { [key: string]: FormGroup } = {};

        this.activities.forEach(groupItem => {
            let controls: { [key: string]: FormControl } = {};

            groupItem.controls.forEach(controlItem => {
                controls[controlItem.key] = new FormControl(controlItem.value);
            });

            groups[groupItem.key] = new FormGroup(controls);
        });

        this.form = new FormGroup({
            email: new FormControl(''),
            ...groups
        });
    }
}
