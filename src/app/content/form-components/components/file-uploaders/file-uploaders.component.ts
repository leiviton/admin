import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

const defaultConfig: DropzoneConfigInterface = {
    clickable: true,
    addRemoveLinks: true
};

@Component({
    selector: 'prx-file-uploaders',
    templateUrl: './file-uploaders.component.html',
    styleUrls: ['./file-uploaders.component.scss']
})
export class FileUploadersComponent implements OnInit {
    singleConfig: DropzoneConfigInterface = {
        ...defaultConfig,
        ...{
            maxFiles: 1
        }
    };

    multipleConfig: DropzoneConfigInterface = {
        ...defaultConfig,
        ...{
            maxFiles: 10
        }
    };

    constructor() {}

    ngOnInit() {}

    onUploadInit(args: any): void {
        // onUploadInit
    }

    onUploadError(args: any): void {
        // onUploadError
    }

    onUploadSuccess(args: any): void {
        // onUploadSuccess
    }
}
