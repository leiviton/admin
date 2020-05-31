import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDropdownsComponent } from './ui-dropdowns.component';

describe('UiDropdownsComponent', () => {
    let component: UiDropdownsComponent;
    let fixture: ComponentFixture<UiDropdownsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UiDropdownsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UiDropdownsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
