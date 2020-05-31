import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadersComponent } from './file-uploaders.component';

describe('FileUploadersComponent', () => {
    let component: FileUploadersComponent;
    let fixture: ComponentFixture<FileUploadersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FileUploadersComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FileUploadersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
