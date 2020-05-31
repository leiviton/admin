import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInputsComponent } from './base-inputs.component';

describe('BaseInputsComponent', () => {
    let component: BaseInputsComponent;
    let fixture: ComponentFixture<BaseInputsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BaseInputsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BaseInputsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
