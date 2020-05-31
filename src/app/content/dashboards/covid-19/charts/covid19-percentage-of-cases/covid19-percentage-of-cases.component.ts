import {
    Component,
    Input,
    SimpleChanges,
    OnChanges,
    NgZone,
    AfterViewInit
} from '@angular/core';
import { GlobalMetric } from '../../models/metrics';
import { BaseComponent, Logger, StyleService } from '@app/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { Covid19Service } from '../../services/covid19.service';

am4core.useTheme(am4themes_animated);

const logger = new Logger('Covid19RecoveryRatioComponent');

@Component({
    selector: 'prx-covid19-percentage-of-cases',
    templateUrl: './covid19-percentage-of-cases.component.html',
    styleUrls: ['./covid19-percentage-of-cases.component.scss']
})
export class Covid19PercentageOfCasesComponent extends BaseComponent
    implements OnChanges, AfterViewInit {
    private percentageChart: am4charts.PieChart;
    metricsToDisplay: GlobalMetric[];

    @Input()
    metrics: GlobalMetric[];

    constructor(private zone: NgZone, private _covidStyle: Covid19Service) {
        super();
    }

    ngOnChanges(changes: SimpleChanges) {
        logger.debug('ngOnChanges', changes);
        if (changes.metrics && changes.metrics.currentValue) {
            this.metricsToDisplay = changes.metrics
                .currentValue as GlobalMetric[];
        }
    }

    ngAfterViewInit() {
        logger.debug('ngAfterViewInit');
        if (this.metricsToDisplay) {
            this.loadChart(this.metricsToDisplay);
        }
    }

    loadChart(metrics: GlobalMetric[]) {
        this.zone.runOutsideAngular(() => {
            let chart = am4core.create('percentageChart', am4charts.PieChart);

            const confirmed = metrics.find(
                metric => metric.type === 'confirmed'
            );
            const data = metrics
                .filter(metric => metric.type !== 'confirmed')
                .reverse();

            chart.data = data.map(metric => {
                return {
                    category: metric.type.replace(/^\w/, c => c.toUpperCase()),
                    value: (metric.today / confirmed.today) * 100,
                    color: this._covidStyle.getCaseStyleColor(metric.type)
                };
            });

            this.configureChart(chart);

            this.percentageChart = chart;
        });
    }

    private configureChart(chart: am4charts.PieChart) {
        // Let's cut a hole in our Pie chart the size of 40% the radius
        chart.radius = am4core.percent(70);
        chart.innerRadius = am4core.percent(40);

        // Add and configure Series
        var series = chart.series.push(new am4charts.PieSeries());
        series.dataFields.value = 'value';
        series.dataFields.category = 'category';
        series.slices.template.inert = true;
        series.slices.template.propertyFields.fill = 'color';

        // Disable ticks and labels
        series.labels.template.disabled = true;
        series.ticks.template.disabled = true;

        var sliceTemplate = series.slices.template;
        sliceTemplate.cornerRadius = 5;
        sliceTemplate.draggable = true;
        sliceTemplate.inert = true;

        // Add a legend
        const legend = new am4charts.Legend();
        //legend.position = 'top';

        let markerTemplate = legend.markers.template;
        markerTemplate.width = 10;
        markerTemplate.height = 10;

        chart.legend = legend;
    }

    ngOnDestroy(): void {
        this.zone.runOutsideAngular(() => {
            if (this.percentageChart) {
                this.percentageChart.dispose();
            }
        });
    }
}
