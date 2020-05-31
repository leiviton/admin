import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDtFilteringComponent } from './ngx-dt-filtering.component';

describe('NgxDtFilteringComponent', () => {
    let component: NgxDtFilteringComponent;
    let fixture: ComponentFixture<NgxDtFilteringComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgxDtFilteringComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxDtFilteringComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
