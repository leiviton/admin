import { Component, OnInit } from '@angular/core';
import { WizardNavigationStyle } from '@app/blocks/wizards/base-wizard';

@Component({
    selector: 'prx-ui-wizard-bullets-nav',
    templateUrl: './ui-wizard-bullets-nav.component.html',
    styleUrls: ['./ui-wizard-bullets-nav.component.scss']
})
export class UiWizardBulletsNavComponent implements OnInit {
    Navigation = WizardNavigationStyle;

    constructor() {}

    ngOnInit(): void {}
}
