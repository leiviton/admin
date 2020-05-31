import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardStepOptionsComponent } from './wizard-step-options.component';

describe('WizardStepOptionsComponent', () => {
    let component: WizardStepOptionsComponent;
    let fixture: ComponentFixture<WizardStepOptionsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WizardStepOptionsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WizardStepOptionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
