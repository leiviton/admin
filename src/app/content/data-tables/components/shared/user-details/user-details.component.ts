import {
    Component,
    OnInit,
    Input,
    ChangeDetectionStrategy
} from '@angular/core';
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons';
import { User } from '@app/blocks/utils';
import { Avatar } from '@app/blocks/avatars/models/avatar';
import { BaseFormComponent, Logger, ColorScheme } from '@app/core';
import { FormBuilder, Validators } from '@angular/forms';

const logger = new Logger('UserDetailsComponent');

@Component({
    selector: 'prx-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent extends BaseFormComponent implements OnInit {
    ColorScheme = ColorScheme;

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

    get avatar(): Avatar {
        return {
            name: this.user.name,
            picture: this.user.picture.medium
        };
    }

    @Input()
    user: User;

    constructor(private formBuilder: FormBuilder) {
        super();
    }

    ngOnInit() {
        this.createForm();

        if (this.form) {
            this.form.reset();
            this.patchForm(this.user);
        }
    }

    /**
     * This is where you will update the value
     * @param param0
     */
    submit({ value, valid }: { value: User; valid: boolean }) {
        if (valid) {
            const model = Object.assign({}, this.user, value);

            // Here you shoul probably call a service method which will call an API endpoint to save the data
            logger.debug(model);
        }
    }

    createForm() {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            country: ['', Validators.required],
            phone: ['', Validators.required],
            gender: ['', Validators.required],
            age: ['', Validators.required]
        });
    }

    patchForm(user: User) {
        this.form.patchValue({
            name: user.name,
            email: user.email,
            country: user.location.country,
            phone: user.phone,
            gender: user.gender,
            age: user.age
        });
    }
}
