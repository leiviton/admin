import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { BaseDataTable } from '../../../base/base-data-table';
import { TableColumn } from '@swimlane/ngx-datatable';
import { UsersService } from '@app/blocks/utils';

import { Logger } from '@app/core';
const logger = new Logger('NgxDtResponsiveComponent');

@Component({
    selector: 'prx-ngx-dt-responsive',
    templateUrl: './ngx-dt-responsive.component.html',
    styleUrls: ['./ngx-dt-responsive.component.scss']
})
export class NgxDtResponsiveComponent extends BaseDataTable implements OnInit {
    @ViewChild('cellTmpl', { static: true })
    cellTmpl: TemplateRef<any>;

    constructor(private _users: UsersService) {
        super();
    }

    ngOnInit() {
        this.applyTemplates();

        this._users.getUsers().subscribe(users => {
            this.isLoading = false;
            this.users = users;
        });
    }

    applyTemplates() {
        this.columns = this.columns.map((col: TableColumn) => {
            return Object.assign(col, { cellTemplate: this.cellTmpl });
        });

        logger.debug(this.columns);
    }
}
