import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreRecentlyViewedComponent } from './store-recently-viewed.component';

describe('StoreRecentlyViewedComponent', () => {
    let component: StoreRecentlyViewedComponent;
    let fixture: ComponentFixture<StoreRecentlyViewedComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StoreRecentlyViewedComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StoreRecentlyViewedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
