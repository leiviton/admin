import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductFilter } from '../../models/product-filter';
import { StoreProductService } from '../../services/store-product.service';
import { Product } from '../../models/product';
import { BaseComponent } from '@app/core';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'prx-store-products',
    templateUrl: './store-products.component.html',
    styleUrls: ['./store-products.component.scss']
})
export class StoreProductsComponent extends BaseComponent
    implements OnInit, OnChanges {
    products: Product[];
    isFirstLoading: boolean = true;
    currentPage: number;

    @Input()
    filter: ProductFilter;

    @Input()
    xl: number;

    constructor(private _products: StoreProductService) {
        super();
    }

    ngOnInit(): void {}

    ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
        const filter = changes.filter;

        if (filter && filter.currentValue) {
            this.isFirstLoading = true;
            this.currentPage = 1;
            this.getProducts(filter.currentValue as ProductFilter);
        }
    }

    getProducts(filter: ProductFilter) {
        this.products = [];
        this.isLoading = true;

        this._products
            .getFiltered(filter)
            .pipe(
                finalize(() => {
                    this.isLoading = false;
                    this.isFirstLoading = false;
                })
            )
            .subscribe(products => {
                this.products = products;
            });
    }

    pageChanged(event: any): void {
        if (this.isFirstLoading) return;

        this.filter.page = event.page;

        this.getProducts(this.filter);
    }
}
