import { Component, OnInit } from '@angular/core';
import { UsersService } from '@app/blocks/utils';
import { BaseDataTable } from '../../../base/base-data-table';

/***
 * Overall Demos
 * Basic
 *   Hidden onLoad (I like the automatic paging changing when scrolling)
 * Tree
 *   Full screen tree (without fullscreen)
 * Grouping
 *   Row Grouping
 *   Row Detail
 *   Responsive
 * Paging
 *   Scrolling Server Side (Like infite scroll)
 *   Virtual Server Side (Automativ page changing on scroll)
 * Selection
 *   Single Row
 *   Multiple Click
 *   Checkbox + Custom Checkbox
 * Columns
 *   Toggling
 *   Reorder
 *   Fixed vs Force
 */
@Component({
    selector: 'prx-ngx-dt-basic',
    templateUrl: './ngx-dt-basic.component.html',
    styleUrls: ['./ngx-dt-basic.component.scss']
})
export class NgxDtBasicComponent extends BaseDataTable implements OnInit {
    constructor(private _users: UsersService) {
        super();
    }

    ngOnInit() {
        this._users.getUsers().subscribe(users => {
            this.isLoading = false;
            this.users = users;
        });
    }
}
