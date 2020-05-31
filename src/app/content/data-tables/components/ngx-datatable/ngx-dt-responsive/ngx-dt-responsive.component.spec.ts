import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDtResponsiveComponent } from './ngx-dt-responsive.component';

describe('NgxDtResponsiveComponent', () => {
    let component: NgxDtResponsiveComponent;
    let fixture: ComponentFixture<NgxDtResponsiveComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgxDtResponsiveComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxDtResponsiveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
