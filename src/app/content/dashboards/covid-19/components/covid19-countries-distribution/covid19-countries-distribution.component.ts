import { Component, OnInit, Input } from '@angular/core';
import { CountryMetric } from '../../models/metrics';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
    selector: 'prx-covid19-countries-distribution',
    templateUrl: './covid19-countries-distribution.component.html',
    styleUrls: ['./covid19-countries-distribution.component.scss']
})
export class Covid19CountriesDistributionComponent implements OnInit {
    @Input()
    countries: CountryMetric[];

    @Input()
    world: CountryMetric;

    ColumnMode = ColumnMode;

    constructor() {}

    ngOnInit(): void {}

    activeComparator(
        a: any,
        b: any,
        rowA: CountryMetric,
        rowB: CountryMetric,
        sortDirection: string
    ) {
        const activeA =
            rowA.confirmed.today - rowA.recovered.today - rowA.deaths.today;
        const activeB =
            rowB.confirmed.today - rowB.recovered.today - rowB.deaths.today;

        if (activeA < activeB) return -1;
        if (activeA > activeB) return 1;

        return -1;
    }
}
