import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { BaseComponent } from '@app/core';
import { Contact } from '../../models/contact';
import { Avatar } from '@app/blocks/avatars/models/avatar';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import {
    faUserPlus,
    faFilter,
    faCircle,
    faCopy,
    faTrash,
    faUserEdit,
    faListUl,
    faTable,
    faUser
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'prx-contacts-list',
    templateUrl: './contacts-list.component.html',
    styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent extends BaseComponent implements OnInit {
    ColumnMode = ColumnMode;
    SelectionType = SelectionType;
    selected: Contact[] = [];

    isTableView: boolean = false;
    get tableStyles(): string {
        return this.isTableView ? 'table table-hover' : 'listview';
    }

    icons = {
        add: faUserPlus,
        filter: faFilter,
        dot: faCircle,
        edit: faUserEdit,
        copy: faCopy,
        delete: faTrash,
        list: faListUl,
        table: faTable,
        details: faUser
    };

    contacts: Contact[];

    get totalCount(): string {
        return this.contacts ? `Total contacts: ${this.contacts.length}` : '';
    }

    constructor(private _contacts: ContactsService) {
        super();
    }

    ngOnInit() {
        this._contacts.getByCount(50).subscribe(users => {
            this.isLoading = false;
            this.contacts = users;
        });
    }

    getAvatarFromContact(user: Contact): Avatar {
        return {
            name: user.name,
            picture: user.picture.thumbnail
        };
    }

    onSelect({ selected }: any) {
        this.selected = [...selected];
    }
}
