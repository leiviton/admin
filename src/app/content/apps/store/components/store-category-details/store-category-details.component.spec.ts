import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCategoryDetailsComponent } from './store-category-details.component';

describe('StoreCategoryDetailsComponent', () => {
    let component: StoreCategoryDetailsComponent;
    let fixture: ComponentFixture<StoreCategoryDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StoreCategoryDetailsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StoreCategoryDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
