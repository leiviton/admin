import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseDataTable } from '../../../base/base-data-table';
import { UsersService, User } from '@app/blocks/utils';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
    selector: 'prx-ngx-dt-responsive-expandable',
    templateUrl: './ngx-dt-responsive-expandable.component.html',
    styleUrls: ['./ngx-dt-responsive-expandable.component.scss']
})
export class NgxDtResponsiveExpandableComponent extends BaseDataTable
    implements OnInit {
    @ViewChild(DatatableComponent, { static: false })
    table: DatatableComponent;

    constructor(private _users: UsersService) {
        super();
    }

    ngOnInit() {
        this._users.getByCount(30).subscribe(users => {
            this.isLoading = false;
            this.users = users;
        });
    }

    onDetailToggle(event: any) {}

    toggleExpandRow(user: User) {
        this.table.rowDetail.toggleExpandRow(user);
    }
}
