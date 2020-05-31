import { Component, OnInit } from '@angular/core';
import { ThemeColor, ColorsService } from '@app/core';

@Component({
    selector: 'prx-radios',
    templateUrl: './radios.component.html',
    styleUrls: ['./radios.component.scss']
})
export class RadiosComponent implements OnInit {
    colors: ThemeColor[];
    inverted: boolean = false;
    inlineModel: string = '2';

    constructor(private colorService: ColorsService) {}

    ngOnInit() {
        this.colors = this.colorService.ThemeColors;
    }
}
