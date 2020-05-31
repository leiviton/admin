import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiModalComponentDemoComponent } from './ui-modal-component-demo.component';

describe('UiModalComponentDemoComponent', () => {
    let component: UiModalComponentDemoComponent;
    let fixture: ComponentFixture<UiModalComponentDemoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UiModalComponentDemoComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UiModalComponentDemoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
