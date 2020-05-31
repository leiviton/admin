import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAvatarsComponent } from './ui-avatars.component';

describe('UiAvatarsComponent', () => {
    let component: UiAvatarsComponent;
    let fixture: ComponentFixture<UiAvatarsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UiAvatarsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UiAvatarsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
