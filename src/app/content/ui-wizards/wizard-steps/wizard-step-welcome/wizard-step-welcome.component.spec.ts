import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardStepWelcomeComponent } from './wizard-step-welcome.component';

describe('WizardStepWelcomeComponent', () => {
    let component: WizardStepWelcomeComponent;
    let fixture: ComponentFixture<WizardStepWelcomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WizardStepWelcomeComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WizardStepWelcomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
