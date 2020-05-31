import { Component, OnInit } from '@angular/core';
import { ProductFilter } from '../../models/product-filter';
import { StoreBrandsService } from '../../services/store-brands.service';
import { StoreCategoriesService } from '../../services/store-categories.service';
import { StoreProductService } from '../../services/store-product.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ColorScheme } from '@app/core';
import { NouiFormatter } from 'ng2-nouislider';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutlined } from '@fortawesome/free-regular-svg-icons';
import { Product } from '../../models/product';
import { BreadcrumType } from '@app/blocks/navigations/breadcrum/breadcrum.component';

export class CurrencyFormatter implements NouiFormatter {
    to(value: number): string {
        return `$${value.toFixed(2)}`;
    }

    from(value: string): number {
        return Number(value);
    }
}

@Component({
    selector: 'prx-store-search-products',
    templateUrl: './store-search-products.component.html',
    styleUrls: ['./store-search-products.component.scss']
})
export class StoreSearchProductsComponent implements OnInit {
    ColorScheme = ColorScheme;

    criteria: any = {};
    filter: ProductFilter;
    searchForm: FormGroup;
    products: Product[];

    breadcrum: BreadcrumType[] = [
        {
            label: 'Store',
            url: ['../../home']
        },
        {
            label: 'Products'
        }
    ];

    icons = {
        star: faStarOutlined,
        starSelected: faStarSolid
    };

    priceSliderConfig: any = {
        range: {
            min: 1,
            max: 3500
        },
        connect: true,
        step: 1,
        tooltips: [new CurrencyFormatter(), new CurrencyFormatter()]
    };

    constructor(
        private _brands: StoreBrandsService,
        private _categories: StoreCategoriesService,
        private _builder: FormBuilder
    ) {
        this.createSearchForm();
    }

    ngOnInit(): void {
        this.criteria.sizes = [
            { name: 'Extra Large', letter: 'XL' },
            { name: 'Large', letter: 'L' },
            { name: 'Medium', letter: 'M' },
            { name: 'Small', letter: 'S' }
        ];

        this.criteria.colors = [
            'f1f1f1',
            'efe8ce',
            'c0c0c0',
            'bdae89',
            'd1a700',
            'ef641e',
            '0d9000',
            '3783d2',
            'e00085',
            'cb0000',
            '6c3db5',
            '242424'
        ];

        this._brands
            .getFeaturedBrands(6)
            .subscribe(brands => (this.criteria.brands = brands));
        this._categories
            .getFeaturedCategories()
            .subscribe(categories => (this.criteria.categories = categories));

        this.updateFilter(this.searchForm);
    }

    createSearchForm() {
        this.searchForm = this._builder.group({
            brand: [''],
            category: [''],
            price: [[150, 1550]],
            size: [''],
            color: [''],
            review: [4]
        });
    }

    updateFilter({ valid, value }: { valid: boolean; value: any }) {
        if (valid) {
            this.filter = Object.assign({}, value);
        }
    }
}
