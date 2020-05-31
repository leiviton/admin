import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiWizardTabsNavComponent } from './ui-wizard-tabs-nav.component';

describe('UiWizardTabsNavComponent', () => {
    let component: UiWizardTabsNavComponent;
    let fixture: ComponentFixture<UiWizardTabsNavComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UiWizardTabsNavComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UiWizardTabsNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
