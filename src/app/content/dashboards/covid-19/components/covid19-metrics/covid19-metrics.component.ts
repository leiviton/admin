import { Component, OnInit } from '@angular/core';
import { GlobalMetric } from '../../models/metrics';
import { Covid19Service } from '../../services/covid19.service';

@Component({
    selector: 'prx-covid19-metrics',
    templateUrl: './covid19-metrics.component.html',
    styleUrls: ['./covid19-metrics.component.scss']
})
export class Covid19MetricsComponent implements OnInit {
    metrics: GlobalMetric[];

    constructor(private _covid: Covid19Service) {}

    ngOnInit(): void {
        this._covid.globalMetrics().subscribe(metrics => {
            console.log('Metrics', this.metrics);
            this.metrics = metrics.summary;
        });
    }
}
