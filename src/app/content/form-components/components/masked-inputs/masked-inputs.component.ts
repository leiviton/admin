import { Component, OnInit } from '@angular/core';

interface Pattern {
    [character: string]: {
        pattern: RegExp;
    };
}

@Component({
    selector: 'prx-masked-inputs',
    templateUrl: './masked-inputs.component.html',
    styleUrls: ['./masked-inputs.component.scss']
})
export class MaskedInputsComponent implements OnInit {
    thousandSeparator: string = ' ';
    secureModel: string;
    specialCharsModel: string;
    customPatternModel: string;
    repeatFormModel: string;
    showMaskModel: string;
    percentValidModel: number;

    phone: string = '123456789';

    pattern: Pattern = {
        N: {
            pattern: new RegExp('\\d')
        }
    };

    surnamePattern: Pattern = {
        N: {
            pattern: new RegExp(`[A-Za-z '-]`)
        }
    };

    customMask: [string, Pattern];
    phoneMask: [string, Pattern];

    constructor() {
        this.customMask = ['NNN.NNN-NNN', this.pattern];
        this.phoneMask = ['(NNN) NNN-NNNN', this.pattern];
    }

    ngOnInit() {}
}
