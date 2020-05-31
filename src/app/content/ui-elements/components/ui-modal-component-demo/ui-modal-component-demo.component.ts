import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'prx-ui-modal-component-demo',
    templateUrl: './ui-modal-component-demo.component.html',
    styleUrls: ['./ui-modal-component-demo.component.scss']
})
export class UiModalComponentDemoComponent implements OnInit {
    title: string;
    list: any[] = [];

    closeBtnName: string;

    constructor(public bsModalRef: BsModalRef) {}

    ngOnInit() {
        this.list.push('PROFIT!!!');
    }
}
