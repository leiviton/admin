import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ColorScheme } from '@app/core';
import { UiModalComponentDemoComponent } from '../ui-modal-component-demo/ui-modal-component-demo.component';

@Component({
    selector: 'prx-ui-modals',
    templateUrl: './ui-modals.component.html',
    styleUrls: ['./ui-modals.component.scss']
})
export class UiModalsComponent implements OnInit {
    ColorScheme = ColorScheme;
    modalRef: BsModalRef;

    // For demos
    items: any[];
    confirmMessage: string;

    constructor(private modalService: BsModalService) {
        this.items = Array(14).fill(0);
    }

    ngOnInit() {}

    openModal(template: TemplateRef<any>, options: any = {}) {
        this.modalRef = this.modalService.show(template, options);
    }

    /**
     * Load a component as modal
     */
    openModalWithComponent() {
        // list & title are props of the compoment used as modal
        const initialState = {
            list: [
                'Open a modal with component',
                'Pass your data',
                'Do something else',
                '...'
            ],
            title: 'Modal with component'
        };

        this.modalRef = this.modalService.show(UiModalComponentDemoComponent, {
            initialState
        });

        // content is the component ref, closeBtnName is a prop as well
        this.modalRef.content.closeBtnName = 'Close';
    }

    /**
     * Used for Confirm Demo
     * @param message
     */
    confirm(message: string): void {
        this.confirmMessage = message;
        this.modalRef.hide();
    }
}
