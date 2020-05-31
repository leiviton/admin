import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiWizardBulletsStepsComponent } from './ui-wizard-bullets-steps.component';

describe('UiWizardBulletsStepsComponent', () => {
    let component: UiWizardBulletsStepsComponent;
    let fixture: ComponentFixture<UiWizardBulletsStepsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UiWizardBulletsStepsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UiWizardBulletsStepsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
