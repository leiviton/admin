import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19PrecautionsComponent } from './covid19-precautions.component';

describe('Covid19PrecautionsComponent', () => {
    let component: Covid19PrecautionsComponent;
    let fixture: ComponentFixture<Covid19PrecautionsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Covid19PrecautionsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Covid19PrecautionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
