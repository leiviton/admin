import { Component, OnInit } from '@angular/core';
import { BaseComponent, ColorScheme } from '@app/core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'prx-crm-statistics',
    templateUrl: './crm-statistics.component.html',
    styleUrls: ['./crm-statistics.component.scss']
})
export class CrmStatisticsComponent extends BaseComponent implements OnInit {
    icons = {
        dw: faAngleDown,
        up: faAngleUp
    };

    metrics = [
        {
            title: 'Processos Provados',
            scheme: ColorScheme.Success,
            value: 9500,
            percent: 58
        },
        {
            title: 'Processsos Reprovados',
            scheme: ColorScheme.Danger,
            value: 2100,
            percent: 32
        },
        {
            title: 'Leis em espera',
            scheme: ColorScheme.Warning,
            value: 43,
            percent: 85
        },

        {
            title: 'Leis prontas',
            scheme: ColorScheme.Info,
            value: 147,
            percent: 51
        }
    ];

    constructor() {
        super();
    }

    ngOnInit(): void {}
}
