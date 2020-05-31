import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDtBasicComponent } from './ngx-dt-basic.component';

describe('NgxDtBasicComponent', () => {
    let component: NgxDtBasicComponent;
    let fixture: ComponentFixture<NgxDtBasicComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgxDtBasicComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxDtBasicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
