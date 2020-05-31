import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CkDefaultComponent } from './ck-default.component';

describe('CkDefaultComponent', () => {
    let component: CkDefaultComponent;
    let fixture: ComponentFixture<CkDefaultComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CkDefaultComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CkDefaultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
