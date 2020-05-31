import { Component, OnInit, OnChanges } from '@angular/core';
import { BaseComponent } from '@app/core';
import { ContactsService } from '../../services/contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../models/contact';
import { BreadcrumType } from '@app/blocks/navigations/breadcrum/breadcrum.component';
import {
    faBuilding,
    faPlus,
    faChevronLeft,
    faTrash,
    faPen,
    faUpload
} from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '@app/blocks/avatars/models/avatar';
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'prx-contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent extends BaseComponent implements OnInit {
    contact: Contact;
    contactId: string;

    breadcrum: BreadcrumType[] = [
        {
            label: 'Contacts',
            url: ['/contacts/grid']
        }
    ];

    icons = {
        create: faPlus,
        edit: faPen,
        company: faBuilding,
        back: faChevronLeft,
        popup: faWindowMaximize,
        delete: faTrash,
        export: faUpload
    };

    navigation = [
        { path: 'personal', icon: 'user' },
        { path: 'projects', icon: 'briefcase' },
        { path: 'analytics', icon: 'pie-chart' }
    ];

    get avatar(): Avatar {
        return {
            name: this.contact.name,
            picture: this.contact.picture.large
        };
    }

    constructor(
        private _contacts: ContactsService,
        private _router: ActivatedRoute
    ) {
        super();
    }

    ngOnInit() {
        this._router.parent.params.subscribe(params =>
            this.fetchUser(params['id'])
        );
    }

    private fetchUser(id: string) {
        this.isLoading = true;
        this.contactId = id;

        this._contacts.getById(id).subscribe((contact: Contact) => {
            this.isLoading = false;

            const activeItem = {
                label: contact.name
            };

            this.breadcrum.push(activeItem);
            this.contact = contact;
        });
    }
}
