import { Component, OnInit } from '@angular/core';
import { UsersService } from '@app/blocks/utils';
import { BaseDataTable } from '../../../base/base-data-table';
import { Logger } from '@app/core';

const logger = new Logger('NgxDtFixedHeaderComponent');

@Component({
    selector: 'prx-ngx-dt-fixed-header',
    templateUrl: './ngx-dt-fixed-header.component.html',
    styleUrls: ['./ngx-dt-fixed-header.component.scss']
})
export class NgxDtFixedHeaderComponent extends BaseDataTable implements OnInit {
    timeout: any;

    constructor(private _users: UsersService) {
        super();
    }

    ngOnInit() {
        this._users.getByCount(50).subscribe(users => {
            this.isLoading = false;
            this.users = users;
        });
    }

    onPage(event: Event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            logger.debug('paged!', event);
        }, 100);
    }
}
