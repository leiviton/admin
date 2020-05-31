import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input
} from '@angular/core';
import { Avatar } from '@app/blocks/avatars/models/avatar';
import { User } from '@app/blocks/utils';

@Component({
    selector: 'prx-selected-rows',
    templateUrl: './selected-rows.component.html',
    styleUrls: ['./selected-rows.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedRowsComponent implements OnInit {
    @Input()
    rows: User[] = [];

    constructor() {}

    ngOnInit() {}

    getAvatarFromUser(user: User): Avatar {
        return {
            name: user.name,
            picture: user.picture.thumbnail
        };
    }
}
