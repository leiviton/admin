import { Component, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { ContactsService } from '../../../services/contacts.service';
import { Project } from '../../../models/contact';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '@app/core';
import { AvatarListItem } from '@app/blocks/avatars/models/avatar';

@Component({
    selector: 'prx-contact-projects',
    templateUrl: './contact-projects.component.html',
    styleUrls: ['./contact-projects.component.scss']
})
export class ContactProjectsComponent extends BaseComponent implements OnInit {
    icons = {
        calendar: faCalendar
    };

    projects: Project[];

    constructor(
        private _contacts: ContactsService,
        private _router: ActivatedRoute
    ) {
        super();
    }

    ngOnInit() {
        this._router.parent.params.subscribe(params =>
            this.fetchProjects(params['id'])
        );
    }

    private fetchProjects(id: string) {
        this.isLoading = true;

        this._contacts
            .getContactProjects(id)
            .subscribe(projects => this.process(projects));
    }

    private process(projects: Project[]) {
        this.isLoading = false;

        this.projects = projects;
    }

    team(project: Project): AvatarListItem[] {
        return project.team.map(member => {
            return {
                avatar: {
                    name: member.name,
                    picture: member.picture.thumbnail
                }
            };
        });
    }
}
