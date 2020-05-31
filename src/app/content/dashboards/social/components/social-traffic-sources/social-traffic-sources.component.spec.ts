import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialTrafficSourcesComponent } from './social-traffic-sources.component';

describe('SocialTrafficSourcesComponent', () => {
    let component: SocialTrafficSourcesComponent;
    let fixture: ComponentFixture<SocialTrafficSourcesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SocialTrafficSourcesComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SocialTrafficSourcesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
