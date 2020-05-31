import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardStepThankYouComponent } from './wizard-step-thank-you.component';

describe('WizardStepThankYouComponent', () => {
    let component: WizardStepThankYouComponent;
    let fixture: ComponentFixture<WizardStepThankYouComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WizardStepThankYouComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WizardStepThankYouComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
