import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19MetricsComponent } from './covid19-metrics.component';

describe('Covid19MetricsComponent', () => {
    let component: Covid19MetricsComponent;
    let fixture: ComponentFixture<Covid19MetricsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Covid19MetricsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Covid19MetricsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
