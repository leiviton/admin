import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialYtbVideosComponent } from './social-ytb-videos.component';

describe('SocialYtbVideosComponent', () => {
    let component: SocialYtbVideosComponent;
    let fixture: ComponentFixture<SocialYtbVideosComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SocialYtbVideosComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SocialYtbVideosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
