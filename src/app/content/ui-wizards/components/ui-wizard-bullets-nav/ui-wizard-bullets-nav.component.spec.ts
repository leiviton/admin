import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiWizardBulletsNavComponent } from './ui-wizard-bullets-nav.component';

describe('UiWizardBulletsNavComponent', () => {
    let component: UiWizardBulletsNavComponent;
    let fixture: ComponentFixture<UiWizardBulletsNavComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UiWizardBulletsNavComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UiWizardBulletsNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
