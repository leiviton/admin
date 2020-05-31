import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardStepPersonalComponent } from './wizard-step-personal.component';

describe('WizardStepPersonalComponent', () => {
    let component: WizardStepPersonalComponent;
    let fixture: ComponentFixture<WizardStepPersonalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WizardStepPersonalComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WizardStepPersonalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
