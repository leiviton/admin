import { OnInit } from '@angular/core';
import { BaseComponent, ColorScheme } from '@app/core';
import { User } from '@app/blocks/utils';
import { ColumnMode, TableColumn } from '@swimlane/ngx-datatable';
import { TitleCasePipe } from '@angular/common';

export class BaseDataTable extends BaseComponent implements OnInit {
    ColumnMode = ColumnMode;
    ColorScheme = ColorScheme;

    users: User[];

    columns: TableColumn[] = [
        { prop: 'name' },
        { name: 'Email' },
        { name: 'Country', prop: 'location.country' },
        { name: 'Phone' },
        { name: 'Gender', pipe: new TitleCasePipe() },
        { name: 'Age', width: 300 }
    ];

    constructor() {
        super();
    }

    ngOnInit() {}
}
