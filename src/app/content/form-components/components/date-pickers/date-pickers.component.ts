import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import {
    BsDatepickerConfig,
    DatepickerDateCustomClasses
} from 'ngx-bootstrap/datepicker';
import { ThemeColor } from '@app/core';

@Component({
    selector: 'prx-date-pickers',
    templateUrl: './date-pickers.component.html',
    styleUrls: ['./date-pickers.component.scss']
})
export class DatePickersComponent implements OnInit {
    today = new Date();
    maxDate = new Date();
    inlineRangeValue: Date[];

    disabledDates: Date[];
    dateCustomClasses: DatepickerDateCustomClasses[];

    customDateFormatForm: FormGroup;

    color: ThemeColor;
    bsConfig: Partial<BsDatepickerConfig>;

    icons = {
        calendar: faCalendarAlt
    };

    constructor(private formBuilder: FormBuilder) {
        this.maxDate.setDate(this.today.getDate() + 7);
        this.inlineRangeValue = [this.today, this.maxDate];

        const twoDaysAhead = new Date();
        twoDaysAhead.setDate(this.today.getDate() + 2);

        const fourDaysAhead = new Date();
        fourDaysAhead.setDate(this.today.getDate() + 4);

        this.disabledDates = [twoDaysAhead, fourDaysAhead];

        this.dateCustomClasses = [
            //{ date: this.today, classes: [] },
            { date: twoDaysAhead, classes: ['bg-warning', 'text-contrast'] },
            { date: fourDaysAhead, classes: ['bg-danger', 'text-contrast'] }
        ];

        this.createForms();
    }

    ngOnInit() {}

    createForms() {
        this.customDateFormatForm = this.formBuilder.group({
            dateYMD: this.today,
            dateMDY: this.today,
            dateFull: this.today,
            dateRange: [[this.today, this.maxDate]]
        });
    }

    applyTheme(color: ThemeColor, dp: any) {
        // create new object on each property change
        // so Angular can catch object reference change
        this.bsConfig = Object.assign(
            {},
            { containerClass: `theme-${color.value}` }
        );

        setTimeout(() => {
            dp.show();
        });
    }
}
