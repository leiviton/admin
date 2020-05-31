import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    AfterViewInit
} from '@angular/core';
import { BaseComponent, StyleService } from '@app/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'prx-crm-revenue',
    templateUrl: './crm-revenue.component.html',
    styleUrls: ['./crm-revenue.component.scss']
})
export class CrmRevenueComponent extends BaseComponent
    implements OnInit, AfterViewInit {
    chart: Chart;

    @ViewChild('revenueChart', { static: false })
    mainChart: ElementRef;

    constructor(private _styles: StyleService) {
        super();
    }

    ngOnInit() {
        this.isLoading = false;
    }

    ngAfterViewInit() {
        this.initializeCharts();
    }

    initializeCharts() {
        const ctx = (this.mainChart
            .nativeElement as HTMLCanvasElement).getContext('2d');
        const data = [50, 100, 130, 172, 90, 70, 60, 130, 155, 160, 145, 150];

        this.chart = new Chart(ctx, {
            type: 'line',
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                callback: function(value) {
                                    if (!(value % 10)) {
                                        return '$' + value + 'k';
                                    }
                                }
                            }
                        }
                    ]
                },
                tooltips: {
                    callbacks: {
                        label: function(item, data) {
                            var label =
                                data.datasets[item.datasetIndex].label || '';
                            var yLabel = item.yLabel;
                            var content = '';

                            if (data.datasets.length > 1) {
                                content +=
                                    '<span class="popover-body-label mr-auto">' +
                                    label +
                                    '</span>';
                            }

                            content +=
                                '<span class="popover-body-value">$' +
                                yLabel +
                                'k</span>';
                            return content;
                        },
                        labelColor: function(tooltipItem, chart) {
                            const color = chart.data.datasets[
                                tooltipItem.datasetIndex
                            ].borderColor as string;

                            return {
                                borderColor: '#000',
                                backgroundColor: color
                            };
                        }
                    }
                }
            },
            data: {
                labels: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                datasets: [
                    {
                        label: 'Revenue',
                        data,
                        backgroundColor: this._styles.gradient(
                            ctx,
                            this._styles.palette.colorInfo,
                            280,
                            0.2
                        ),
                        borderColor: this._styles.palette.colorInfo
                    }
                ]
            }
        });
    }
}
