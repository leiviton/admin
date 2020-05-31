import { Component, OnInit } from '@angular/core';
import {
    faAngleDown,
    faUser,
    faCog,
    faCalendarAlt,
    faSync,
    faSpinner
} from '@fortawesome/free-solid-svg-icons';
import {
    faSmileBeam,
    faGrinHearts,
    faGrinBeamSweat,
    faGrinSquintTears
} from '@fortawesome/free-regular-svg-icons';
import { ColorsService, ThemeColor } from '@app/core';

@Component({
    selector: 'prx-input-groups',
    templateUrl: './input-groups.component.html',
    styleUrls: ['./input-groups.component.scss']
})
export class InputGroupsComponent implements OnInit {
    icons = {
        arrowDown: faAngleDown,
        user: faUser,
        cog: faCog,
        calendar: faCalendarAlt,
        sync: faSync,
        spinner: faSpinner
    };

    colors: ThemeColor[];
    faces = [
        { name: 'Smile', icon: faSmileBeam },
        { name: 'Hearts', icon: faGrinHearts },
        { name: 'Sweat', icon: faGrinBeamSweat },
        { name: 'Tear', icon: faGrinSquintTears }
    ];

    constructor(private colorService: ColorsService) {}

    ngOnInit() {
        this.colors = this.colorService.ThemeColors;
    }
}
