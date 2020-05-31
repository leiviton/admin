import { Component, OnInit, Input } from '@angular/core';
import { StoreBrandsService } from '../../services/store-brands.service';
import { Brand } from '../../models/brands';

@Component({
    selector: 'prx-store-featured-brands',
    templateUrl: './store-featured-brands.component.html',
    styleUrls: ['./store-featured-brands.component.scss']
})
export class StoreFeaturedBrandsComponent implements OnInit {
    @Input()
    count: number = 6;

    allBrands: Brand[];

    get brands() {
        return this.allBrands;
    }

    constructor(private _brands: StoreBrandsService) {}

    ngOnInit(): void {
        this._brands
            .getFeaturedBrands(this.count)
            .subscribe(brands => (this.allBrands = brands));
    }
}
