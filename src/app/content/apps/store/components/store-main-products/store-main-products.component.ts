import { Component, OnInit } from '@angular/core';
import {
    faChevronLeft,
    faChevronRight,
    faHeart,
    faCartPlus
} from '@fortawesome/free-solid-svg-icons';
import { StoreCategoriesService } from '../../services/store-categories.service';
import { ProductFilter } from '../../models/product-filter';
import { ProductCategory } from '../../models/product';

@Component({
    selector: 'prx-store-main-products',
    templateUrl: './store-main-products.component.html',
    styleUrls: ['./store-main-products.component.scss']
})
export class StoreMainProductsComponent implements OnInit {
    private _filter: ProductFilter;

    categories: ProductCategory[];
    activeCategory: ProductCategory;

    icons = {
        chevLeft: faChevronLeft,
        chevRight: faChevronRight,
        cart: faCartPlus
    };

    get categoryFilter() {
        return this._filter;
    }

    constructor(private _categories: StoreCategoriesService) {}

    ngOnInit(): void {
        this._categories.getWithSubCategories().subscribe(categories => {
            this.categories = categories;
            this.activeCategory = categories[0];

            this.switchCategory(this.activeCategory);
        });
    }

    switchCategory(category: ProductCategory) {
        this.activeCategory = category;

        this._filter = {
            category: category.slug
        };
    }
}
