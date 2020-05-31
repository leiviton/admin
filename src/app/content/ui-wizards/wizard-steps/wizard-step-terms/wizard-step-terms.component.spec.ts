import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardStepTermsComponent } from './wizard-step-terms.component';

describe('WizardStepTermsComponent', () => {
    let component: WizardStepTermsComponent;
    let fixture: ComponentFixture<WizardStepTermsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WizardStepTermsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WizardStepTermsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
