import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDtRowDetailsComponent } from './ngx-dt-row-details.component';

describe('NgxDtRowDetailsComponent', () => {
    let component: NgxDtRowDetailsComponent;
    let fixture: ComponentFixture<NgxDtRowDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgxDtRowDetailsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxDtRowDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
