import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiColorRibbonComponent } from './ui-color-ribbon.component';

describe('UiColorRibbonComponent', () => {
    let component: UiColorRibbonComponent;
    let fixture: ComponentFixture<UiColorRibbonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UiColorRibbonComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UiColorRibbonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
