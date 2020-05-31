import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
    selector: 'prx-product-title',
    templateUrl: './product-title.component.html',
    styleUrls: ['./product-title.component.scss']
})
export class ProductTitleComponent implements OnInit {
    @Input()
    product: Product;

    constructor() {}

    ngOnInit(): void {}
}
