import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    AfterViewInit
} from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { StyleService } from '@app/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'prx-contact-analytics',
    templateUrl: './contact-analytics.component.html',
    styleUrls: ['./contact-analytics.component.scss']
})
export class ContactAnalyticsComponent implements OnInit, AfterViewInit {
    lineChart: Chart;

    @ViewChild('miniChart', { static: false })
    miniChart: ElementRef;

    icons = {
        angleUp: faAngleUp
    };

    ytbVideos = [
        {
            name: 'Installing and configuring Proxima template',
            uploaded: '7 weeks ago',
            views: { actual: 3009984, goal: 4000000 },
            likes: 370265
        },
        {
            name: 'How Proxima can help you boost your solution',
            uploaded: '10 days ago',
            views: { actual: 2024225, goal: 3000000 },
            likes: 446840
        },
        {
            name: 'A new way to develop for the web',
            uploaded: '8 months ago',
            views: { actual: 1020083, goal: 3000000 },
            likes: 254304
        }
    ];

    fbAudienceGrowth = [
        {
            key: 'Total subscribers',
            value: 64874
        },
        {
            key: 'Paid likes',
            value: 783
        },
        {
            key: 'Organic likes',
            value: 675
        }
    ];

    constructor(private _styles: StyleService) {}

    ngOnInit() {}

    ngAfterViewInit() {
        this.initializeCharts();
    }

    initializeCharts() {
        const canvas = (this.miniChart
            .nativeElement as HTMLCanvasElement).getContext('2d');

        this.lineChart = new Chart(canvas, {
            type: 'line',
            data: {
                labels: new Array(12),
                datasets: [
                    {
                        data: [0, 5, 14, 35, 20, 35, 50, 75, 85, 60, 65, 45]
                    }
                ]
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
                        hoverRadius: 0
                    }
                },
                tooltips: {
                    custom: () => false
                }
            }
        });
    }
}
