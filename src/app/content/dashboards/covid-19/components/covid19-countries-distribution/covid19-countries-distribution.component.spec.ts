import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19CountriesDistributionComponent } from './covid19-countries-distribution.component';

describe('Covid19CountriesDistributionComponent', () => {
    let component: Covid19CountriesDistributionComponent;
    let fixture: ComponentFixture<Covid19CountriesDistributionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Covid19CountriesDistributionComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(
            Covid19CountriesDistributionComponent
        );
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
