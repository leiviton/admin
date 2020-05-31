import { Component, OnInit, Input } from '@angular/core';
import { Invoice } from '../../models/invoice.model';
import { Avatar } from '@app/blocks/avatars/models/avatar';

@Component({
    selector: 'prx-invoice-details',
    templateUrl: './invoice-details.component.html',
    styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {
    @Input()
    invoice: Invoice;

    get avatar(): Avatar {
        return { name: this.invoice.to.name };
    }

    constructor() {}

    ngOnInit() {}
}
