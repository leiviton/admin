import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialFbGrowthComponent } from './social-fb-growth.component';

describe('SocialFbGrowthComponent', () => {
    let component: SocialFbGrowthComponent;
    let fixture: ComponentFixture<SocialFbGrowthComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SocialFbGrowthComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SocialFbGrowthComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
