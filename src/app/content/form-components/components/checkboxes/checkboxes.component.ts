import { Component, OnInit } from '@angular/core';
import { ThemeColor, ColorsService } from '@app/core';

@Component({
    selector: 'prx-checkboxes',
    templateUrl: './checkboxes.component.html',
    styleUrls: ['./checkboxes.component.scss']
})
export class CheckboxesComponent implements OnInit {
    colors: ThemeColor[];
    inverted: boolean = false;

    constructor(private colorService: ColorsService) {}

    ngOnInit() {
        this.colors = this.colorService.ThemeColors;
    }
}
