import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreMainProductsComponent } from './store-main-products.component';

describe('StoreMainProductsComponent', () => {
    let component: StoreMainProductsComponent;
    let fixture: ComponentFixture<StoreMainProductsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StoreMainProductsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StoreMainProductsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
