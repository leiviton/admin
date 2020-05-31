import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSearchProductsComponent } from './store-search-products.component';

describe('StoreSearchProductsComponent', () => {
    let component: StoreSearchProductsComponent;
    let fixture: ComponentFixture<StoreSearchProductsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StoreSearchProductsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StoreSearchProductsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
