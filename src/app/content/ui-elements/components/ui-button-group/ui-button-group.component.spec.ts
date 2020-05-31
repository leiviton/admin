import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiButtonGroupComponent } from './ui-button-group.component';

describe('UiButtonGroupComponent', () => {
    let component: UiButtonGroupComponent;
    let fixture: ComponentFixture<UiButtonGroupComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UiButtonGroupComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UiButtonGroupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
