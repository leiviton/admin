import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialRecentlySubscribersComponent } from './social-recently-subscribers.component';

describe('SocialRecentlySubscribersComponent', () => {
    let component: SocialRecentlySubscribersComponent;
    let fixture: ComponentFixture<SocialRecentlySubscribersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SocialRecentlySubscribersComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SocialRecentlySubscribersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
