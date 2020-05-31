import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmSalesComponent } from './crm-sales.component';

describe('CrmSalesComponent', () => {
    let component: CrmSalesComponent;
    let fixture: ComponentFixture<CrmSalesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CrmSalesComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CrmSalesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
