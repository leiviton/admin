import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'prx-wizard-step-personal',
    templateUrl: './wizard-step-personal.component.html',
    styleUrls: ['./wizard-step-personal.component.scss']
})
export class WizardStepPersonalComponent implements OnInit {
    form: FormGroup;
    genders = [
        {
            code: 'male',
            name: 'Male',
            icon: faMale
        },
        {
            code: 'female',
            name: 'Female',
            icon: faFemale
        }
    ];

    constructor(private _builder: FormBuilder) {}

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.form = this._builder.group({
            fullName: ['', Validators.required],
            city: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            gender: ['', Validators.required]
        });
    }
}
