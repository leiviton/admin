import { Component, OnInit } from '@angular/core';
import { BaseDataTable } from '../../../base/base-data-table';
import { UsersService } from '@app/blocks/utils';
import { SelectionType } from '@swimlane/ngx-datatable';

@Component({
    selector: 'prx-ngx-dt-checkbox',
    templateUrl: './ngx-dt-checkbox.component.html',
    styleUrls: ['./ngx-dt-checkbox.component.scss']
})
export class NgxDtCheckboxComponent extends BaseDataTable implements OnInit {
    selected: any[] = [];
    SelectionType = SelectionType;

    constructor(private _users: UsersService) {
        super();
    }

    ngOnInit() {
        this._users.getByCount(28).subscribe(users => {
            this.isLoading = false;
            this.users = users;
        });
    }

    onSelect({ selected }: any) {
        this.selected = [...selected];
    }
}
