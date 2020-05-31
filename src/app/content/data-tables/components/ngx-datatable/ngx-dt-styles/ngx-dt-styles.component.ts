import { Component, OnInit } from '@angular/core';
import { UsersService } from '@app/blocks/utils';
import { BaseDataTable } from '../../../base/base-data-table';
import { ColorScheme } from '@app/core';

@Component({
    selector: 'prx-ngx-dt-styles',
    templateUrl: './ngx-dt-styles.component.html',
    styleUrls: ['./ngx-dt-styles.component.scss']
})
export class NgxDtStylesComponent extends BaseDataTable implements OnInit {
    ColorScheme = ColorScheme;

    currentStyles: string[] = [];
    isTableView: boolean = true;

    styles = [
        {
            name: 'Hovered',
            style: 'table-hover'
        },
        {
            name: 'Striped',
            style: 'table-striped'
        },
        {
            name: 'Bordered',
            style: 'table-bordered'
        }
    ];

    get tableStyles(): string {
        return (
            (this.isTableView ? 'table' : 'listview') +
            ' ' +
            this.currentStyles.join(' ')
        );
    }

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
