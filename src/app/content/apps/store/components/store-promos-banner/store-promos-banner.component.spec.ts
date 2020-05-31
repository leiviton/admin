import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePromosBannerComponent } from './store-promos-banner.component';

describe('StorePromosBannerComponent', () => {
    let component: StorePromosBannerComponent;
    let fixture: ComponentFixture<StorePromosBannerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StorePromosBannerComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StorePromosBannerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
