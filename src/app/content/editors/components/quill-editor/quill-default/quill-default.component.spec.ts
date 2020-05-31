import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillDefaultComponent } from './quill-default.component';

describe('QuillDefaultComponent', () => {
    let component: QuillDefaultComponent;
    let fixture: ComponentFixture<QuillDefaultComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [QuillDefaultComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuillDefaultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
