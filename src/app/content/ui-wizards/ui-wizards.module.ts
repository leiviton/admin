import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { UtilsModule } from '@app/blocks/utils';
import { WizardsModule } from '@app/blocks/wizards/wizards.module';
import { FormControlsModule } from '@app/blocks/form-controls/form-controls.module';

import { UiWizardsRoutingModule } from './ui-wizards-routing.module';

import { WizardStepOptionsComponent } from './wizard-steps/wizard-step-options/wizard-step-options.component';
import { WizardStepPersonalComponent } from './wizard-steps/wizard-step-personal/wizard-step-personal.component';
import { WizardStepTermsComponent } from './wizard-steps/wizard-step-terms/wizard-step-terms.component';
import { WizardStepThankYouComponent } from './wizard-steps/wizard-step-thank-you/wizard-step-thank-you.component';
import { WizardStepWelcomeComponent } from './wizard-steps/wizard-step-welcome/wizard-step-welcome.component';

@NgModule({
    declarations: [
        ...UiWizardsRoutingModule.declarations,

        WizardStepOptionsComponent,
        WizardStepPersonalComponent,
        WizardStepTermsComponent,
        WizardStepThankYouComponent,
        WizardStepWelcomeComponent
    ],
    imports: [
        SharedModule,
        WizardsModule,
        UtilsModule,
        FormControlsModule,
        UiWizardsRoutingModule
    ]
})
export class UiWizardsModule {}
