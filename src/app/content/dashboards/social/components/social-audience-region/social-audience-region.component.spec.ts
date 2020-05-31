import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAudienceRegionComponent } from './social-audience-region.component';

describe('SocialAudienceRegionComponent', () => {
    let component: SocialAudienceRegionComponent;
    let fixture: ComponentFixture<SocialAudienceRegionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SocialAudienceRegionComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SocialAudienceRegionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
