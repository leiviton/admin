import { Component, OnInit } from '@angular/core';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'prx-store-home',
    templateUrl: './store-home.component.html',
    styleUrls: ['./store-home.component.scss']
})
export class StoreHomeComponent implements OnInit {
    icons = {
        truck: faTruck
    };

    constructor() {}

    ngOnInit(): void {}
}
