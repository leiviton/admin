import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTypographicComponent } from './ui-typographic.component';

describe('UiTypographicComponent', () => {
    let component: UiTypographicComponent;
    let fixture: ComponentFixture<UiTypographicComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UiTypographicComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UiTypographicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
