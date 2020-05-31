import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmProjectsComponent } from './crm-projects.component';

describe('CrmProjectsComponent', () => {
    let component: CrmProjectsComponent;
    let fixture: ComponentFixture<CrmProjectsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CrmProjectsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CrmProjectsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
