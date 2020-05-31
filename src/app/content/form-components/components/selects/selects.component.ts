import { Component, OnInit } from '@angular/core';
import { UsersService } from '@app/blocks/utils';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { cloneDeep } from 'lodash';

import { User } from '@app/blocks/utils';

const companiesNames = ['Uber', 'Microsoft', 'Flexigen'];

@Component({
    selector: 'prx-selects',
    templateUrl: './selects.component.html',
    styleUrls: ['./selects.component.scss']
})
export class SelectsComponent implements OnInit {
    users: User[];
    usersDisabled: User[];
    selectedUsers: User[] = [];
    selectedAll: string[] = [];

    isLoading = false;
    icons = {
        search: faSearch
    };

    companies: any[] = [];

    constructor(private _users: UsersService) {}

    ngOnInit() {
        this.isLoading = true;
        this._users.getUsers().subscribe(users => {
            this.isLoading = false;
            this.users = users;

            /**
             * Showcase 'disabled' option
             * The disabled item needs to have a 'disabled' key set to true
             **/
            this.usersDisabled = cloneDeep(users);

            const disabled = this.usersDisabled[1];

            Object.defineProperty(disabled, 'disabled', {
                value: true,
                writable: false
            });
        });

        /**
         * Used in Tags demos
         */
        companiesNames.forEach((c, i) => {
            this.companies.push({ id: i, name: c });
        });
    }

    groupByCountry = (user: User) => user.location.country;

    groupValueCountry = (_: string, children: User[]) => ({
        name: children[0].location.country,
        total: children.length
    });

    customSearchFn(term: string, item: User) {
        term = term.toLowerCase();
        return (
            item.name.toLowerCase().indexOf(term) > -1 ||
            item.gender.toLowerCase() === term
        );
    }

    addTagFn(name: string) {
        return { name: name, tag: true };
    }

    selectAll() {
        this.selectedAll = this.users.map(x => x.email);
    }

    unselectAll() {
        this.selectedAll = [];
    }
}
