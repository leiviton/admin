import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BreadcrumType } from '@app/blocks/navigations/breadcrum/breadcrum.component';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice.model';

@Component({
    selector: 'prx-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.scss']
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoiceComponent implements OnInit {
    invoice: Invoice = null;
    invoiceId: string;

    breadcrum: BreadcrumType[] = [
        {
            label: 'Billing',
            url: ['/billing']
        }
    ];

    get discount(): number {
        const invoice = this.invoice;

        return invoice.amount * (invoice.discount / 100);
    }

    get totalDue(): number {
        const invoice = this.invoice;

        return invoice.amount - this.discount;
    }

    constructor(
        private route: ActivatedRoute,
        private _invoices: InvoiceService
    ) {}

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            this.invoiceId = id;

            const activeItem = {
                label: `Invoice #${id}`
            };

            this.breadcrum.push(activeItem);

            this._invoices.getInvoiceById(id).subscribe(response => {
                this.invoice = response;
            });
        });
    }
}
