import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CkBindingOptionsComponent } from './ck-binding-options.component';

describe('CkBindingOptionsComponent', () => {
    let component: CkBindingOptionsComponent;
    let fixture: ComponentFixture<CkBindingOptionsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CkBindingOptionsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CkBindingOptionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
