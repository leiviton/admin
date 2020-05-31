import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmLatestTicketsComponent } from './crm-latest-tickets.component';

describe('CrmLatestTicketsComponent', () => {
    let component: CrmLatestTicketsComponent;
    let fixture: ComponentFixture<CrmLatestTicketsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CrmLatestTicketsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CrmLatestTicketsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
