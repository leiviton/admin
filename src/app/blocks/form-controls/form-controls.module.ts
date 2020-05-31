import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { NouisliderModule } from 'ng2-nouislider';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCopyPasteModule } from 'ngx-copypaste';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { IconsModule } from '../icons/icons.module';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { ButtonComponent } from './button/button.component';
import { ButtonLanguageSelectorComponent } from './button-language-selector/button-language-selector.component';

/*import { TextInputComponent } from './text-input/text-input.component';
import { FormGroupInputComponent } from './form-group-input/form-group-input.component';
*/

import { ToggleComponent } from './toggle/toggle.component';
import { RadioCardComponent } from './radio-card/radio-card.component';
import { CardsModule } from '../cards/cards.module';
import { RadioComponent } from './radio/radio.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';

const exports = [
    CheckboxComponent,
    ButtonComponent,
    ButtonLanguageSelectorComponent,
    /*,
  TextInputComponent,
  FormGroupInputComponent,
  */
    ToggleComponent,
    RadioCardComponent,
    RadioComponent,
    RadioGroupComponent
];

const exportsModule = [
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgOptionHighlightModule,
    NouisliderModule,
    NgxCopyPasteModule,
    NgxMaskModule,
    PasswordStrengthMeterModule
];

@NgModule({
    declarations: [...exports],
    imports: [
        CommonModule,
        IconsModule,
        BsDropdownModule,
        TranslateModule,
        CardsModule,
        ...exportsModule
    ],
    exports: [...exports, ...exportsModule]
})
export class FormControlsModule {}
