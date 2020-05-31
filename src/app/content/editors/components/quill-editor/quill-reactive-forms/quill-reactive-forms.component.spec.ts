import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillReactiveFormsComponent } from './quill-reactive-forms.component';

describe('QuillReactiveFormsComponent', () => {
    let component: QuillReactiveFormsComponent;
    let fixture: ComponentFixture<QuillReactiveFormsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [QuillReactiveFormsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuillReactiveFormsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
