import { Component, OnInit } from '@angular/core';
import { BaseComponent, StyleService } from '@app/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'prx-social-traffic-sources',
    templateUrl: './social-traffic-sources.component.html',
    styleUrls: ['./social-traffic-sources.component.scss']
})
export class SocialTrafficSourcesComponent extends BaseComponent
    implements OnInit {
    chart: Chart;

    get legend() {
        return this.chart.generateLegend();
    }

    constructor(private _styles: StyleService) {
        super();
    }

    ngOnInit() {
        this.isLoading = false;

        this.initializeCharts();
    }

    randomScalingFactor() {
        return Math.round(Math.random() * 100);
    }

    initializeCharts() {
        this.chart = new Chart('main-chart', {
            type: 'doughnut',
            options: {
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                tooltips: {
                    callbacks: {
                        title: function(item, data) {
                            var title = data.labels[item[0].index];
                            return title as any;
                        },
                        label: function(item, data) {
                            var value = data.datasets[0].data[item.index];
                            var content = '';

                            content +=
                                '<span class="popover-body-value">' +
                                value +
                                '%</span>';
                            return content;
                        }
                    }
                }
            },
            data: {
                labels: ['Direct', 'Search', 'Referral', 'Paid', 'Social'],
                datasets: [
                    {
                        data: [
                            this.randomScalingFactor(),
                            this.randomScalingFactor(),
                            this.randomScalingFactor(),
                            this.randomScalingFactor(),
                            this.randomScalingFactor()
                        ],
                        backgroundColor: [
                            this._styles.palette.colorPrimary,
                            this._styles.palette.colorSuccess,
                            this._styles.palette.colorDanger,
                            this._styles.palette.colorInfo,
                            this._styles.palette.colorWarning
                        ]
                    }
                ]
            }
        });
    }
}
