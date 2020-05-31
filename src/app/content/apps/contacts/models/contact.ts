export class Contact {
    gender: string;
    name: string;
    location: Location;
    email: string;
    registered: string;
    phone: string;
    cell: string;
    picture: Picture;
    nat: string;
    tags: string[];
    status: string;
    company: string;

    get statusClass(): string {
        let newVal = this.status;

        switch (this.status) {
            case 'active':
                newVal = 'success';
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

export interface Registered {
    date: string;
    age: number;
}

export interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: Coordinates;
    timezone: Timezone;
}

export interface Coordinates {
    latitude: string;
    longitude: string;
}

export interface Street {
    number: number;
    name: string;
}

export interface Timezone {
    offset: string;
    description: string;
}

export interface Name {
    title: string;
    first: string;
    last: string;
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export class Project {
    name: string;
    description: string;
    department: string;
    dates: ProjectDates;
    team: Contact[];
    progress: number;
}

export class ProjectDates {
    startDate: Date;
    deadline: Date;
}
