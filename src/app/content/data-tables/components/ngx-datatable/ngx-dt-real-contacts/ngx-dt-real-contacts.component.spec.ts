import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDtRealContactsComponent } from './ngx-dt-real-contacts.component';

describe('NgxDtRealContactsComponent', () => {
    let component: NgxDtRealContactsComponent;
    let fixture: ComponentFixture<NgxDtRealContactsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgxDtRealContactsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxDtRealContactsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
