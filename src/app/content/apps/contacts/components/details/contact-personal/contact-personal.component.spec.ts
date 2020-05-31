import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPersonalComponent } from './contact-personal.component';

describe('ContactPersonalComponent', () => {
    let component: ContactPersonalComponent;
    let fixture: ComponentFixture<ContactPersonalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ContactPersonalComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContactPersonalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
