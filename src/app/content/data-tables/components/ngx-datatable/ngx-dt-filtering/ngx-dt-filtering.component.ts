import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseDataTable } from '../../../base/base-data-table';
import { UsersService, User } from '@app/blocks/utils';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Logger } from '@app/core';
const logger = new Logger('NgxDtFilteringComponent');

@Component({
    selector: 'prx-ngx-dt-filtering',
    templateUrl: './ngx-dt-filtering.component.html',
    styleUrls: ['./ngx-dt-filtering.component.scss']
})
export class NgxDtFilteringComponent extends BaseDataTable implements OnInit {
    filteredUsers: User[];

    public form: FormGroup;

    @ViewChild(DatatableComponent, { static: false })
    table: DatatableComponent;

    constructor(
        private _users: UsersService,
        private formBuilder: FormBuilder
    ) {
        super();

        this.createForm();
    }

    ngOnInit() {
        this._users.getByCount(30).subscribe(users => {
            this.isLoading = false;

            // Initial complete users list
            this.users = users;

            // Cache our data, this will be our filtered list
            this.filteredUsers = [...users];
        });
    }

    createForm() {
        this.form = this.formBuilder.group({
            name: [''],
            country: ['']
        });
    }

    updateFilter({ value }: { value: any }) {
        logger.debug(value);

        // filter our data
        const filtered = this.users.filter((user: User) => {
            return (
                user.name.toLowerCase().indexOf(value.name.toLowerCase()) !==
                    -1 &&
                user.location.country
                    .toLowerCase()
                    .indexOf(value.country.toLowerCase()) !== -1
            );
        });

        // update the rows
        this.filteredUsers = filtered;

        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
}
