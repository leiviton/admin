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
    selector: 'prx-social-monthly-subscribers',
    templateUrl: './social-monthly-subscribers.component.html',
    styleUrls: ['./social-monthly-subscribers.component.scss']
})
export class SocialMonthlySubscribersComponent extends BaseComponent
    implements OnInit, AfterViewInit {
    subscriptionOptions: string[] = ['This month', 'Last month', 'This year'];
    selectedSubscription: string = this.subscriptionOptions[0];

    lineChart: Chart;

    @ViewChild('mainChart', { static: false })
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
        const data = [
            300,
            450,
            200,
            280,
            250,
            400,
            350,
            300,
            480,
            250,
            450,
            500
        ];

        this.lineChart = new Chart(ctx, {
            type: 'line',
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
                        label: 'Facebook',
                        data: data.map(value => value * 6),
                        backgroundColor: this._styles.toRgba(
                            this._styles.brands.facebook,
                            0.14
                        ),
                        borderColor: this._styles.brands.facebook
                    },
                    {
                        label: 'Instagram',
                        data: data.map(value => value * 3),
                        backgroundColor: this._styles.toRgba(
                            this._styles.brands.instagram,
                            0.14
                        ),
                        borderColor: this._styles.brands.instagram
                    },
                    {
                        label: 'Youtube',
                        data: data.map(value => value * 1),
                        backgroundColor: this._styles.toRgba(
                            this._styles.brands.youtube,
                            0.14
                        ),
                        borderColor: this._styles.brands.youtube
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                callback: function(value) {
                                    if (!(value % 10)) {
                                        return value + 'k';
                                    }
                                }
                            }
                        }
                    ]
                },
                tooltips: {
                    callbacks: {
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
            }
        });
    }

    // Accordion Events
    changeSubscriptionOption(subscriptionOption: string) {
        this.selectedSubscription = subscriptionOption;
    }
}
