import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import { CountryMetric, MetricValue } from '../../models/metrics';
import { Covid19Service } from '../../services/covid19.service';
import { finalize } from 'rxjs/operators';
import { BaseComponent } from '@app/core';
import {
    faArrowCircleUp,
    faArrowCircleDown,
    faStopCircle,
    faSearch
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'prx-covid19-cases-by-country',
    templateUrl: './covid19-cases-by-country.component.html',
    styleUrls: ['./covid19-cases-by-country.component.scss']
})
export class Covid19CasesByCountryComponent extends BaseComponent
    implements OnInit {
    metrics: CountryMetric[];
    world: CountryMetric;
    countryModel: string;
    selectedCountry: CountryMetric;

    icons = {
        up: faArrowCircleUp,
        down: faArrowCircleDown,
        unvariant: faStopCircle,
        search: faSearch
    };

    constructor(private _covid: Covid19Service) {
        super();
    }

    ngOnInit(): void {
        this._covid
            .countryMetrics()
            .pipe(finalize(() => (this.isLoading = false)))
            .subscribe(metrics => {
                this.metrics = metrics;
                this.metrics.sort(
                    (a, b) => b.confirmed.today - a.confirmed.today
                );

                this.world = {
                    name: 'World',
                    code: 'global',
                    confirmed: {
                        today: this.metrics.reduce(
                            (sum, current) =>
                                sum + Math.round(current.confirmed.today),
                            0
                        ),
                        yesterday: this.metrics.reduce(
                            (sum, current) =>
                                sum + Math.round(current.confirmed.yesterday),
                            0
                        )
                    },
                    recovered: { today: 0, yesterday: 0 },
                    deaths: { today: 0, yesterday: 0 }
                };
            });
    }

    getVariationIcon(value: MetricValue) {
        const variation = this.getVariation(value);
        return variation == 0
            ? this.icons.unvariant
            : variation > 0
            ? this.icons.up
            : this.icons.down;
    }

    getVariation(value: MetricValue) {
        return value.today - value.yesterday;
    }

    selectCountry(country: CountryMetric) {
        this.selectedCountry = country;
    }
}
