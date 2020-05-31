import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTooltipComponent } from './ui-tooltip.component';

describe('UiTooltipComponent', () => {
    let component: UiTooltipComponent;
    let fixture: ComponentFixture<UiTooltipComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UiTooltipComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UiTooltipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
