import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFeaturedBrandsComponent } from './store-featured-brands.component';

describe('StoreFeaturedBrandsComponent', () => {
    let component: StoreFeaturedBrandsComponent;
    let fixture: ComponentFixture<StoreFeaturedBrandsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StoreFeaturedBrandsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StoreFeaturedBrandsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
