import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDtFixedHeaderComponent } from './ngx-dt-fixed-header.component';

describe('NgxDtFixedHeaderComponent', () => {
    let component: NgxDtFixedHeaderComponent;
    let fixture: ComponentFixture<NgxDtFixedHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgxDtFixedHeaderComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxDtFixedHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
