import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice.model';
import { BaseComponent } from '@app/core';
import {
    faDownload,
    faEye,
    faBell,
    faTrashAlt,
    faList,
    faTable,
    faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'prx-invoice-list',
    templateUrl: './invoice-list.component.html',
    styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent extends BaseComponent implements OnInit {
    icons = {
        download: faDownload,
        eye: faEye,
        bell: faBell,
        trash: faTrashAlt,
        calendar: faCalendarAlt
    };

    views = {
        table: faTable,
        list: faList
    };

    invoices: Invoice[];

    constructor(private _invoices: InvoiceService) {
        super();
    }

    ngOnInit() {
        this._invoices.getAllInvoices().subscribe((invoices: Invoice[]) => {
            this.isLoading = false;
            this.invoices = invoices;
        });
    }

    onShown(invoice: Invoice) {
        this._invoices.getInvoiceDetails(invoice.id).subscribe(response => {
            invoice.items = response.items;
        });
    }
}
