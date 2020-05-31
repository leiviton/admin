import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmRevenueComponent } from './crm-revenue.component';

describe('CrmRevenueComponent', () => {
    let component: CrmRevenueComponent;
    let fixture: ComponentFixture<CrmRevenueComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CrmRevenueComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CrmRevenueComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
