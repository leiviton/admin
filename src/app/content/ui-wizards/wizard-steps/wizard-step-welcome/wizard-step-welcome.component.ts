import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '@app/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'prx-wizard-step-welcome',
    templateUrl: './wizard-step-welcome.component.html',
    styleUrls: ['./wizard-step-welcome.component.scss']
})
export class WizardStepWelcomeComponent implements OnInit {
    form: FormGroup;

    get password(): string {
        return this.form.get('password').value;
    }

    constructor(private _builder: FormBuilder) {}

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.form = this._builder.group({
            username: [''],
            email: ['', Validators.email],
            password: ['']
        });
    }
}
