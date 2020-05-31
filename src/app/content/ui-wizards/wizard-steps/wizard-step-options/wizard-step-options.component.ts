import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '@app/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'prx-wizard-step-options',
    templateUrl: './wizard-step-options.component.html',
    styleUrls: ['./wizard-step-options.component.scss']
})
export class WizardStepOptionsComponent extends BaseFormComponent
    implements OnInit {
    topics = [
        {
            code: 'security',
            name: 'Security',
            icon: 'shield'
        },
        {
            code: 'layouts',
            name: 'Layouts Variations',
            icon: 'layout'
        },
        {
            code: 'design',
            name: 'Design Files',
            icon: 'file'
        },
        {
            code: 'support',
            name: 'Support',
            icon: 'help-circle'
        }
    ];

    constructor(private _builder: FormBuilder) {
        super();
    }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.form = this._builder.group({
            matters: ['']
        });
    }
}
