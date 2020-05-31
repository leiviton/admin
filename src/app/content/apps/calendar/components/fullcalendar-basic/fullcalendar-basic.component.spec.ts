import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcalendarBasicComponent } from './fullcalendar-basic.component';

describe('FullcalendarBasicComponent', () => {
    let component: FullcalendarBasicComponent;
    let fixture: ComponentFixture<FullcalendarBasicComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FullcalendarBasicComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FullcalendarBasicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
