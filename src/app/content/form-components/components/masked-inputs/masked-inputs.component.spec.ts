import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskedInputsComponent } from './masked-inputs.component';

describe('MaskedInputsComponent', () => {
    let component: MaskedInputsComponent;
    let fixture: ComponentFixture<MaskedInputsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MaskedInputsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MaskedInputsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
