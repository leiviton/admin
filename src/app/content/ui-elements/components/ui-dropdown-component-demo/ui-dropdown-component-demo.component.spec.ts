import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDropdownComponentDemoComponent } from './ui-dropdown-component-demo.component';

describe('UiDropdownComponentDemoComponent', () => {
    let component: UiDropdownComponentDemoComponent;
    let fixture: ComponentFixture<UiDropdownComponentDemoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UiDropdownComponentDemoComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UiDropdownComponentDemoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
