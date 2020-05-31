import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDtCheckboxComponent } from './ngx-dt-checkbox.component';

describe('NgxDtCheckboxComponent', () => {
    let component: NgxDtCheckboxComponent;
    let fixture: ComponentFixture<NgxDtCheckboxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgxDtCheckboxComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxDtCheckboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
