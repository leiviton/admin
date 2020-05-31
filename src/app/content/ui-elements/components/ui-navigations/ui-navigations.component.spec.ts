import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiNavigationsComponent } from './ui-navigations.component';

describe('UiNavigationsComponent', () => {
    let component: UiNavigationsComponent;
    let fixture: ComponentFixture<UiNavigationsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UiNavigationsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UiNavigationsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
