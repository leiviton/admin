import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialEngagingPostComponent } from './social-engaging-post.component';

describe('SocialEngagingPostComponent', () => {
    let component: SocialEngagingPostComponent;
    let fixture: ComponentFixture<SocialEngagingPostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SocialEngagingPostComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SocialEngagingPostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
