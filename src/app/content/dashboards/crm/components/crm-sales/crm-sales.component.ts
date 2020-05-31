import { Component, OnInit } from '@angular/core';
import { faBuilding, faPlus } from '@fortawesome/free-solid-svg-icons';
import { StyleService } from '@app/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'prx-crm-sales',
    templateUrl: './crm-sales.component.html',
    styleUrls: ['./crm-sales.component.scss']
})
export class CrmSalesComponent implements OnInit {
    chart: Chart;

    icons = {
        create: faPlus,
        company: faBuilding
    };

    navigation = [
        { path: 'personal', icon: this.icons.create },
        { path: 'projects', icon: this.icons.company },
        { path: 'analytics', icon: this.icons.company }
    ];

    constructor(private _styles: StyleService) {}

    ngOnInit() {
        this.chart = new Chart('sales-chart', {
            type: 'bar',
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
                        label: 'Last Year',
                        data: [18, 20, 20, 12, 7, 8, 18, 16, 18, 16, 16, 23],
                        backgroundColor: this._styles.GrayScale.gray300
                    },
                    {
                        label: 'Sales',
                        data: [21, 14, 20, 22, 12, 10, 23, 26, 28, 26, 21, 36],
                        backgroundColor: this._styles.palette.colorPrimary
                    }
                ]
            }
        });
    }
}
