import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import {
    GlobalMetricResponse,
    GlobalMetric,
    CountryMetric,
    DateMetric
} from '../models/metrics';
import { CountrySummary } from '../models/country-summary';
import { StyleService } from '@app/core';

const routes = {
    globalMetrics: () => `/covid-19/global-metrics`,
    countryMetrics: () => `/covid-19/country-metrics`,
    historyWorld: () => `/covid-19/history/world`
};

@Injectable({
    providedIn: 'root'
})
export class Covid19Service {
    constructor(private _http: HttpClient, private _styles: StyleService) {}

    globalMetrics(): Observable<GlobalMetricResponse> {
        return this._http.get<GlobalMetricResponse>(routes.globalMetrics());
    }

    countryMetrics() {
        return this._http.get<CountryMetric[]>(routes.countryMetrics());
    }

    worldHistory() {
        return this._http.get<DateMetric[]>(routes.historyWorld());
    }

    getCaseBsClass(metricType: string) {
        let cls = 'info';

        if (metricType === 'recovered') {
            cls = 'success';
        } else if (metricType === 'deaths') {
            cls = 'danger';
        } else if (metricType === 'active') {
            cls = 'primary';
        }

        return cls;
    }

    getCaseStyleColor(metricType: string) {
        let color = this._styles.palette.colorInfo;

        if (metricType === 'recovered') {
            color = this._styles.palette.colorSuccess;
        } else if (metricType === 'deaths') {
            color = this._styles.palette.colorDanger;
        } else if (metricType === 'active') {
            color = this._styles.palette.colorPrimary;
        }

        return color;
    }
}
