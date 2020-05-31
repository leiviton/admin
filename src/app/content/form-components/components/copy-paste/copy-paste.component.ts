import { Component, OnInit } from '@angular/core';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'prx-copy-paste',
    templateUrl: './copy-paste.component.html',
    styleUrls: ['./copy-paste.component.scss']
})
export class CopyPasteComponent implements OnInit {
    icons = {
        copy: faCopy,
        more: faEllipsisH
    };

    text: string = 'This is a demo text';

    constructor() {}

    ngOnInit() {}
}
