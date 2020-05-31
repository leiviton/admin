import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDtGroupingComponent } from './ngx-dt-grouping.component';

describe('NgxDtGroupingComponent', () => {
    let component: NgxDtGroupingComponent;
    let fixture: ComponentFixture<NgxDtGroupingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgxDtGroupingComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxDtGroupingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
