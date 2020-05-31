import { Component, OnInit } from '@angular/core';
import {
    faUser,
    faSync,
    faSpinner,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import { ThemeColor, ColorsService } from '@app/core';

@Component({
    selector: 'prx-base-inputs',
    templateUrl: './base-inputs.component.html',
    styleUrls: ['./base-inputs.component.scss']
})
export class BaseInputsComponent implements OnInit {
    colors: ThemeColor[];
    current: ColorOptions;
    icons = {
        user: faUser,
        sync: faSync,
        spinner: faSpinner,
        angleDown: faAngleDown
    };

    constructor(private colorService: ColorsService) {}

    ngOnInit() {
        this.colors = this.colorService.ThemeColors;

        this.current = {
            color: this.colors.find(e => e.value == 'primary'),
            background: this.colors.find(e => e.value == 'contrast')
        };
    }

    applyColor(color: ThemeColor) {
        this.current.color = color;
    }

    applyBackgroundColor(color: ThemeColor) {
        this.current.background = color;
    }

    setFormControlStyle(): string[] {
        const color = `text-${this.current.color.value}`;
        const background = `bg-${this.current.background.value}`;

        return [color, background];
    }

    setCheckStyle(isCheck: boolean): string {
        return (isCheck ? 'checkbox-' : 'radio-') + this.current.color.value;
    }
}

interface ColorOptions {
    color: ThemeColor;
    background: ThemeColor;
}
