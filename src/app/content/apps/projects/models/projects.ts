import { Avatar } from '@app/blocks/avatars/models/avatar';

export class Project {
    id: string;
    requestedBy: ProjectUser;
    asignee: ProjectUser[];
    tags: string[];
    status: string;
    company: string;
    priority: string;

    get requestedByAvatar(): Avatar {
        return {
            name: this.requestedBy.name,
            picture: this.requestedBy.picture.medium
        };
    }

    get priorityClass(): string {
        let newVal = this.priority;

        switch (this.priority) {
            case 'high':
                newVal = 'danger';
                break;
            case 'medium':
                newVal = 'warning';
                break;
            case 'low':
                newVal = 'success';
                break;
        }

        return newVal;
    }

    get statusClass(): string {
        let newVal = this.status;

        switch (this.status) {
            case 'completed':
                newVal = 'success';
                break;
            case 'open':
                newVal = 'info';
                break;
            case 'suspended':
                newVal = 'warning';
                break;
            case 'canceled':
                newVal = 'danger';
                break;
            case 'waiting':
                newVal = 'secondary';
                break;
        }

        return newVal;
    }
}

export interface ProjectUser {
    name: string;
    email: string;
    picture: Picture;
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}
