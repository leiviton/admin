import { Component, OnInit } from '@angular/core';
import { BaseFormComponent, ColorScheme } from '@app/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'prx-settings-security',
    templateUrl: './settings-security.component.html',
    styleUrls: ['./settings-security.component.scss']
})
export class SettingsSecurityComponent extends BaseFormComponent
    implements OnInit {
    ColorScheme = ColorScheme;

    get password(): string {
        return this.form.get('password').value;
    }

    constructor(private formBuilder: FormBuilder) {
        super();
        this.createForm();
    }

    ngOnInit() {}

    private createForm() {
        this.form = this.formBuilder.group({
            oldPassword: ['', Validators.required],
            password: ['', Validators.required],
            confirmation: ['', Validators.required]
        });
    }

    submit({ value, valid }: { value: any; valid: boolean }) {
        this.isLoading = true;

        if (valid) {
        }
    }
}
