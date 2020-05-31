import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialTwitterTrendsComponent } from './social-twitter-trends.component';

describe('SocialTwitterTrendsComponent', () => {
    let component: SocialTwitterTrendsComponent;
    let fixture: ComponentFixture<SocialTwitterTrendsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SocialTwitterTrendsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SocialTwitterTrendsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
