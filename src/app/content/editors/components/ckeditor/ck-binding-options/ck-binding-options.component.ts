import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BaseFormComponent } from '@app/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'prx-ck-binding-options',
    templateUrl: './ck-binding-options.component.html',
    styleUrls: ['./ck-binding-options.component.scss']
})
export class CkBindingOptionsComponent extends BaseFormComponent
    implements OnInit {
    model = {
        editorData: '<p>Hello, world!</p>'
    };

    editor = ClassicEditor;

    constructor(private fb: FormBuilder) {
        super();

        this.createForm();
    }

    ngOnInit() {}

    createForm() {
        this.form = this.fb.group({
            content: ['']
        });
    }
}
