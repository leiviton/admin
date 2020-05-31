import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@app/core';

import {
    faCircle,
    faChevronCircleUp,
    faChevronCircleDown,
    faChevronCircleLeft
} from '@fortawesome/free-solid-svg-icons';
import { ProjectsService } from '@app/content/apps/projects/services/projects.service';
import { AvatarListItem } from '@app/blocks/avatars/models/avatar';
import {
    Project,
    ProjectUser
} from '@app/content/apps/projects/models/projects';

@Component({
    selector: 'prx-crm-projects',
    templateUrl: './crm-projects.component.html',
    styleUrls: ['./crm-projects.component.scss']
})
export class CrmProjectsComponent extends BaseComponent implements OnInit {
    projects: Project[];

    icons = {
        dot: faCircle,
        up: faChevronCircleUp,
        down: faChevronCircleDown,
        left: faChevronCircleLeft
    };

    constructor(private _projects: ProjectsService) {
        super();
    }

    ngOnInit() {
        this._projects.getLatest().subscribe(projects => {
            this.isLoading = false;

            this.projects = projects;
        });
    }

    getPriorityIcon(priority: string) {
        switch (priority) {
            case 'high':
                return this.icons.up;
            case 'medium':
                return this.icons.left;
            case 'low':
                return this.icons.down;
        }

        return this.icons.dot;
    }

    teamAvatars(asignee: ProjectUser[]): AvatarListItem[] {
        return asignee.map(member => {
            return {
                avatar: {
                    name: member.name,
                    picture: member.picture.thumbnail
                }
            };
        });
    }
}
