import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAnalyticsComponent } from './contact-analytics.component';

describe('ContactAnalyticsComponent', () => {
    let component: ContactAnalyticsComponent;
    let fixture: ComponentFixture<ContactAnalyticsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ContactAnalyticsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContactAnalyticsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
