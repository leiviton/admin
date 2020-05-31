import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChanges
} from '@angular/core';
import { GlobalMetric, MetricValue } from '../../models/metrics';
import {
    faCircle,
    faArrowCircleUp,
    faArrowCircleDown,
    faStopCircle,
    faSearch
} from '@fortawesome/free-solid-svg-icons';
import { BaseComponent } from '@app/core';

@Component({
    selector: 'prx-covid19-cases-worldwide',
    templateUrl: './covid19-cases-worldwide.component.html',
    styleUrls: ['./covid19-cases-worldwide.component.scss']
})
export class Covid19CasesWorldwideComponent extends BaseComponent
    implements OnChanges, OnInit {
    confirmed: GlobalMetric;

    stacked: any[] = [];

    icons = {
        circle: faCircle,
        up: faArrowCircleUp,
        down: faArrowCircleDown,
        unvariant: faStopCircle,
        search: faSearch
    };

    maxStacked: number;
    metricsToDisplay: GlobalMetric[];

    @Input()
    metrics: GlobalMetric[];

    constructor() {
        super();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.metrics && changes.metrics.currentValue) {
            const metrics = changes.metrics.currentValue as GlobalMetric[];
            this.metricsToDisplay = metrics.filter(
                metric => metric.type !== 'confirmed'
            );
            this.isLoading = false;

            this.confirmed = this.getCase('confirmed', metrics);

            let maxStacked: number = 0;
            this.metricsToDisplay.forEach(metric => {
                this.stacked.push({
                    value: metric.today,
                    type: this.getClass(metric)
                });

                maxStacked += metric.today;
            });

            this.maxStacked = maxStacked;
        }
    }

    private getCase(type: string, metrics: GlobalMetric[]) {
        return metrics.find(metric => metric.type === type);
    }

    ngOnInit(): void {}

    getClass(metric: GlobalMetric) {
        let cls = 'primary';

        if (metric.type === 'recovered') {
            cls = 'success';
        } else if (metric.type === 'deaths') {
            cls = 'danger';
        }

        return cls;
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
}
