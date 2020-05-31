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
    faPhone,
    faMobile,
    faBuilding,
    faUser
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'prx-contacts-grid',
    templateUrl: './contacts-grid.component.html',
    styleUrls: ['./contacts-grid.component.scss']
})
export class ContactsGridComponent extends BaseComponent implements OnInit {
    ColumnMode = ColumnMode;
    SelectionType = SelectionType;

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

        location: 'map-pin',
        contact: 'book',
        notes: 'file',

        phone: faPhone,
        mobile: faMobile,
        company: faBuilding,
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
            picture: user.picture.large
        };
    }
}
