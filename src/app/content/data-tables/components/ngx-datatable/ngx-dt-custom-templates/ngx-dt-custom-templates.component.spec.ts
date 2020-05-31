import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDtCustomTemplatesComponent } from './ngx-dt-custom-templates.component';

describe('NgxDtCustomTemplatesComponent', () => {
    let component: NgxDtCustomTemplatesComponent;
    let fixture: ComponentFixture<NgxDtCustomTemplatesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgxDtCustomTemplatesComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxDtCustomTemplatesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
