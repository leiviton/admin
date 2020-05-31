import {
    Component,
    OnInit,
    Input,
    ViewChild,
    ElementRef,
    AfterViewInit,
    OnChanges,
    SimpleChanges
} from '@angular/core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { GlobalMetric } from '../../models/metrics';
import { Chart } from 'chart.js';

@Component({
    selector: 'prx-covid19-global-metric',
    templateUrl: './covid19-global-metric.component.html',
    styleUrls: ['./covid19-global-metric.component.scss']
})
export class Covid19GlobalMetricComponent
    implements OnInit, OnChanges, AfterViewInit {
    icons = {
        dw: faAngleDown,
        up: faAngleUp
    };

    lineChart: Chart;

    scale: number[];

    @ViewChild('miniChart', { static: false })
    miniChart: ElementRef;

    @Input()
    metric: GlobalMetric;

    constructor() {}

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges): void {
        console.log('>>>', changes);

        if (changes.metric) {
            const metric = changes.metric;

            if (metric.currentValue) {
            }
        }
    }

    ngAfterViewInit() {
        this.initializeChart();
    }

    initializeChart() {
        const canvas = (this.miniChart
            .nativeElement as HTMLCanvasElement).getContext('2d');

        this.lineChart = new Chart(canvas, {
            type: 'line',
            data: {
                labels: Object.keys(this.metric.scale),
                datasets: [{ data: Object.values(this.metric.scale) }]
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            display: false
                        }
                    ],
                    xAxes: [
                        {
                            display: false
                        }
                    ]
                },
                elements: {
                    line: {
                        borderWidth: 2
                    },
                    point: {
                        radius: 0,
                        hoverRadius: 2
                    }
                }
            }
        });
    }
}
