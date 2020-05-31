import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiWizardCirclesNavComponent } from './ui-wizard-circles-nav.component';

describe('UiWizardCirclesNavComponent', () => {
    let component: UiWizardCirclesNavComponent;
    let fixture: ComponentFixture<UiWizardCirclesNavComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UiWizardCirclesNavComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UiWizardCirclesNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
