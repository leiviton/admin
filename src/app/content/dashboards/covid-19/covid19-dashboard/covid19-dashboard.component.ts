import { Component, OnInit } from '@angular/core';
import { ColorScheme, BaseComponent } from '@app/core';
import { AlertStyle } from '@app/blocks/alerts/models/alert-style.enum';
import { Covid19Service } from '../services/covid19.service';
import { GlobalMetric } from '../models/metrics';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'prx-covid19-dashboard',
    templateUrl: './covid19-dashboard.component.html',
    styleUrls: ['./covid19-dashboard.component.scss']
})
export class Covid19DashboardComponent extends BaseComponent implements OnInit {
    ColorScheme = ColorScheme;
    AlertStyle = AlertStyle;

    metrics: GlobalMetric[];

    constructor(private _covid: Covid19Service) {
        super();
    }

    ngOnInit(): void {
        this._covid
            .globalMetrics()
            .pipe(
                finalize(() => {
                    this.isLoading = false;
                })
            )
            .subscribe(response => {
                this.metrics = response.summary;
            });
    }
}
