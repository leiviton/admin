import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { BaseDataTable } from '../../../base/base-data-table';
import { UsersService } from '@app/blocks/utils';

import { Logger } from '@app/core';
const logger = new Logger('NgxDtGroupingComponent');

@Component({
    selector: 'prx-ngx-dt-grouping',
    templateUrl: './ngx-dt-grouping.component.html',
    styleUrls: ['./ngx-dt-grouping.component.scss']
})
export class NgxDtGroupingComponent extends BaseDataTable implements OnInit {
    @ViewChild(DatatableComponent, { static: false })
    table: DatatableComponent;

    flatCountryUsers: any[];

    isTableView: boolean = true;
    isListCollapsed: boolean = true;

    constructor(private _users: UsersService) {
        super();
    }

    ngOnInit() {
        this._users.getByCount(35).subscribe(users => {
            this.isLoading = false;
            this.flatCountryUsers = users;

            this.flatCountryUsers.forEach(
                item => (item.country = item.location.country)
            );
        });
    }

    onDetailToggle({ value }: any) {
        logger.debug('Detail Toggled', value);
    }

    toggleExpandGroup(group: any) {
        logger.debug('Toggled Expand Group!', group);
        this.table.groupHeader.toggleExpandGroup(group);
    }
}
