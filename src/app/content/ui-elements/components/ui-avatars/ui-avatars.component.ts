import { Component, OnInit } from '@angular/core';
import { AvatarListItem, Avatar } from '@app/blocks/avatars/models/avatar';
import { UsersService, User } from '@app/blocks/utils';
import { StyleService, ColorVariation } from '@app/core';
import { random } from 'lodash';

enum DemoType {
    clean,
    cleanPlaceholder,
    stateFull,
    stateFullPlaceholder,
    withInfo,
    withInfoPlaceholder,
    list
}

interface AvatarModelDemo extends AvatarListItem {
    info: string;
}

@Component({
    selector: 'prx-ui-avatars',
    templateUrl: './ui-avatars.component.html',
    styleUrls: ['./ui-avatars.component.scss']
})
export class UiAvatarsComponent implements OnInit {
    avatars: AvatarModelDemo[];
    demos: { type: string; avatars: AvatarModelDemo[] }[] = [];

    Demo = DemoType;

    constructor(private _users: UsersService, private _style: StyleService) {}

    ngOnInit() {
        this._users
            .getByCount(6)
            .subscribe(users => this.prepareForDemo(users));
    }

    prepareForDemo(users: User[]) {
        this.avatars = users.map(user => this.createAvatarDemo(user));
    }

    createAvatar(user: User): Avatar {
        return {
            name: user.name,
            picture: user.picture.medium,
            status: user.status
        };
    }

    createAvatarDemo(user: User): AvatarModelDemo {
        return {
            avatar: this.createAvatar(user),
            placeholderBgColor: this.generateRandomColor(),
            info: user.email
        };
    }

    generateRandomColor(): string {
        const styles = [1, 2, 3, 4, 5, 6];
        const style = random(styles[0], styles[styles.length - 1]);

        const variation: ColorVariation = (() => {
            switch (style) {
                case 1:
                    return this._style.Color1;
                case 2:
                    return this._style.Color2;
                case 3:
                    return this._style.Color3;
                case 4:
                    return this._style.Color4;
                case 5:
                    return this._style.Color5;
                case 6:
                    return this._style.Color6;
            }
        })();

        return variation.base;
    }

    //
    getAvatar(avatar: Avatar, demo: DemoType): Avatar {
        let avatarValue: Avatar;

        switch (demo) {
            case DemoType.clean:
                avatarValue = {
                    name: avatar.name,
                    picture: avatar.picture
                };
                break;
            case DemoType.cleanPlaceholder:
            case DemoType.withInfoPlaceholder:
                avatarValue = {
                    name: avatar.name
                };
                break;
            case DemoType.stateFull:
                avatarValue = {
                    name: avatar.name,
                    picture: avatar.picture,
                    status: avatar.status
                };
                break;
            case DemoType.stateFullPlaceholder:
                avatarValue = {
                    name: avatar.name,
                    status: avatar.status
                };
                break;
            default:
                avatarValue = avatar;
        }

        return avatarValue;
    }

    // Used all across the demos to include or exclude some properties to the avatar objects
    getForDemo(demo: DemoType): AvatarModelDemo[] {
        return this.avatars.map(item => {
            return {
                avatar: this.getAvatar(item.avatar, demo),
                placeholderBgColor:
                    demo === DemoType.cleanPlaceholder ||
                    demo == DemoType.stateFullPlaceholder ||
                    demo == DemoType.withInfoPlaceholder
                        ? item.placeholderBgColor
                        : null,
                info:
                    demo === DemoType.withInfo ||
                    demo == DemoType.withInfoPlaceholder
                        ? item.info
                        : null
            };
        });
    }
}
