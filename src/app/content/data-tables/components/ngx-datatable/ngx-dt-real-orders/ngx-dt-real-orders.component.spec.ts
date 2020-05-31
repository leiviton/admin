import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDtRealOrdersComponent } from './ngx-dt-real-orders.component';

describe('NgxDtRealOrdersComponent', () => {
    let component: NgxDtRealOrdersComponent;
    let fixture: ComponentFixture<NgxDtRealOrdersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgxDtRealOrdersComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxDtRealOrdersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
