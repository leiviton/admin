import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '@app/core';
import { BreadcrumType } from '@app/blocks/navigations/breadcrum/breadcrum.component';

@Component({
    selector: 'prx-store-header',
    templateUrl: './store-header.component.html',
    styleUrls: ['./store-header.component.scss']
})
export class StoreHeaderComponent extends BaseComponent implements OnInit {
    @Input()
    title: string;

    @Input()
    subtitle: string;

    @Input()
    breadcrum: BreadcrumType[];

    constructor() {
        super();
    }

    ngOnInit(): void {}
}
