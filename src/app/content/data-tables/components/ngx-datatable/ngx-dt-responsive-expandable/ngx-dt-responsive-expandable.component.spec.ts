import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDtResponsiveExpandableComponent } from './ngx-dt-responsive-expandable.component';

describe('NgxDtResponsiveExpandableComponent', () => {
    let component: NgxDtResponsiveExpandableComponent;
    let fixture: ComponentFixture<NgxDtResponsiveExpandableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgxDtResponsiveExpandableComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxDtResponsiveExpandableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
