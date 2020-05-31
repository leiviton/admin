import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
    selector: 'prx-ck-default',
    templateUrl: './ck-default.component.html',
    styleUrls: ['./ck-default.component.scss']
})
export class CkDefaultComponent implements OnInit {
    editor = ClassicEditor;

    constructor() {}

    ngOnInit() {}
}
