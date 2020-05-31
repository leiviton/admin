import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDtStylesComponent } from './ngx-dt-styles.component';

describe('NgxDtStylesComponent', () => {
    let component: NgxDtStylesComponent;
    let fixture: ComponentFixture<NgxDtStylesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgxDtStylesComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxDtStylesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
