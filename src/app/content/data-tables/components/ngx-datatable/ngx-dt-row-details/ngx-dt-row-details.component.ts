import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseDataTable } from '../../../base/base-data-table';
import { UsersService, User } from '@app/blocks/utils';
import { DatatableComponent } from '@swimlane/ngx-datatable';

import { Logger } from '@app/core';
const logger = new Logger('NgxDtRowDetailsComponent');

@Component({
    selector: 'prx-ngx-dt-row-details',
    templateUrl: './ngx-dt-row-details.component.html',
    styleUrls: ['./ngx-dt-row-details.component.scss']
})
export class NgxDtRowDetailsComponent extends BaseDataTable implements OnInit {
    @ViewChild(DatatableComponent, { static: false })
    table: DatatableComponent;

    constructor(private _users: UsersService) {
        super();
    }

    ngOnInit() {
        this._users.getByCount(35).subscribe(users => {
            this.isLoading = false;
            this.users = users;
        });
    }

    /**
     * The method receives the User as parameter, it's the object you assign to every row
     */
    toggleExpandRow(user: User) {
        logger.debug('Toggled Expand Row!', user);
        this.table.rowDetail.toggleExpandRow(user);
    }

    onDetailToggle(event: any) {
        logger.debug('Detail Toggled', event);
    }
}
