import { Component, OnInit } from '@angular/core';
import { BaseDataTable } from '../../../base/base-data-table';
import { UsersService, User } from '@app/blocks/utils';
import { Avatar } from '@app/blocks/avatars/models/avatar';
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'prx-ngx-dt-custom-templates',
    templateUrl: './ngx-dt-custom-templates.component.html',
    styleUrls: ['./ngx-dt-custom-templates.component.scss']
})
export class NgxDtCustomTemplatesComponent extends BaseDataTable
    implements OnInit {
    icons = {
        male: faMale,
        female: faFemale
    };

    constructor(private _users: UsersService) {
        super();
    }

    ngOnInit() {
        this._users.getByCount(50).subscribe(users => {
            this.isLoading = false;
            this.users = users;
        });
    }

    getAvatarFromUser(user: User): Avatar {
        return {
            name: user.name,
            picture: user.picture.thumbnail
        };
    }
}
