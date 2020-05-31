import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19DashboardComponent } from './covid19-dashboard.component';

describe('Covid19DashboardComponent', () => {
    let component: Covid19DashboardComponent;
    let fixture: ComponentFixture<Covid19DashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Covid19DashboardComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Covid19DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
