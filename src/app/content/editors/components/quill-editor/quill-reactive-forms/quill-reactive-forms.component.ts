import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseFormComponent } from '@app/core';
import { QuillEditorComponent } from 'ngx-quill';
import { FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'prx-quill-reactive-forms',
    templateUrl: './quill-reactive-forms.component.html',
    styleUrls: ['./quill-reactive-forms.component.scss']
})
export class QuillReactiveFormsComponent extends BaseFormComponent
    implements OnInit {
    formIsEnabled: boolean = true;

    @ViewChild(QuillEditorComponent, { static: true })
    quillEditor: QuillEditorComponent;

    constructor(private fb: FormBuilder) {
        super();

        this.createForm();
    }

    ngOnInit() {
        this.form.controls.editor.valueChanges
            .pipe(debounceTime(400), distinctUntilChanged())
            .subscribe(data => {
                // native fromControl value changes with debounce
            });

        this.quillEditor.onContentChanged
            .pipe(debounceTime(400), distinctUntilChanged())
            .subscribe(data => {
                // tslint:disable-next-line:no-console
                // view child + directly subscription
            });
    }

    createForm() {
        this.form = this.fb.group({
            editor: ['']
        });
    }

    setControl() {
        this.form.setControl(
            'editor',
            new FormControl('This new value is set to the editor.')
        );
    }

    patchValue() {
        this.form
            .get('editor')
            .patchValue(`${this.form.get('editor').value} patched!`);
    }

    enableDisableForm() {
        this.formIsEnabled ? this.form.enable() : this.form.disable();
    }
}
