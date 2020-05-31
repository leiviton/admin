import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmStatisticsComponent } from './crm-statistics.component';

describe('CrmStatisticsComponent', () => {
    let component: CrmStatisticsComponent;
    let fixture: ComponentFixture<CrmStatisticsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CrmStatisticsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CrmStatisticsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
