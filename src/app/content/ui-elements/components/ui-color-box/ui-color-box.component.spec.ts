import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiColorBoxComponent } from './ui-color-box.component';

describe('UiColorBoxComponent', () => {
    let component: UiColorBoxComponent;
    let fixture: ComponentFixture<UiColorBoxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UiColorBoxComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UiColorBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
