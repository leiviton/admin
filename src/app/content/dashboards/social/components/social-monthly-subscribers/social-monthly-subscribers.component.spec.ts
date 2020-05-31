import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMonthlySubscribersComponent } from './social-monthly-subscribers.component';

describe('SocialMonthlySubscribersComponent', () => {
    let component: SocialMonthlySubscribersComponent;
    let fixture: ComponentFixture<SocialMonthlySubscribersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SocialMonthlySubscribersComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SocialMonthlySubscribersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
