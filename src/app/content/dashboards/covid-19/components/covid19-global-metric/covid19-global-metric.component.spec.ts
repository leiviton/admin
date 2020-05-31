import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19GlobalMetricComponent } from './covid19-global-metric.component';

describe('Covid19GlobalMetricComponent', () => {
    let component: Covid19GlobalMetricComponent;
    let fixture: ComponentFixture<Covid19GlobalMetricComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Covid19GlobalMetricComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Covid19GlobalMetricComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
