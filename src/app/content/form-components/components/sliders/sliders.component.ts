import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'prx-sliders',
    templateUrl: './sliders.component.html',
    styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements OnInit {
    disabled: boolean = false;
    keyupLabelOn: boolean = false;
    keydownLabelOn: boolean = false;

    // Basic value demo vars
    basicValue: Number = { value: 50 };

    // Setting min & max demo vars
    setValue: Number = { value: 5 };
    setMin: Number = { value: -10 };
    setMax: Number = { value: 10 };
    setStep: number = 1;

    // Stepping demo vars
    stepStep: Number = { value: 10 };
    stepValue: Number = { value: 10 };

    someValue: number = 5;
    someMin: number = -10;
    someMax: number = 10;
    someStep: number = 1;

    someRange: number[] = [3, 7];
    pipRange: number[] = [10, 14];
    tooltipRange: number[] = [2, 8];

    pipRangeconfig: any = {
        behaviour: 'drag',
        connect: true,
        margin: 1,
        limit: 5,
        range: {
            min: 0,
            max: 20
        },
        pips: {
            mode: 'steps',
            density: 5
        }
    };

    someKeyboard: number[] = [1, 3];
    someKeyboardConfig: any = {
        behaviour: 'drag',
        connect: true,
        start: [0, 5],
        keyboard: true,
        step: 0.1,
        pageSteps: 10, // number of page steps, defaults to 10
        range: {
            min: 0,
            max: 5
        },
        pips: {
            mode: 'count',
            density: 2,
            values: 6,
            stepped: true
        }
    };

    form1: FormGroup;
    form2: FormGroup;
    form3: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.form1 = this.formBuilder.group({ single: [10] });
        this.form2 = this.formBuilder.group({ range: [[2, 8]] });
        this.form3 = this.formBuilder.group({ single: [3] });
    }

    decreaseValue(model: Number) {
        model.value--;
    }

    increaseValue(model: Number) {
        model.value++;
    }

    changeSingleFormValue(value: number) {
        const control = <FormControl>this.form1.controls['single'];
        control.setValue(control.value + value);
    }

    changeRangeFormValue(index: number, value: number) {
        const control = <FormControl>this.form2.controls['range'];
        const newRange = control.value;
        newRange[index] = newRange[index] + value;
        control.setValue(newRange);
    }

    changeSomeRange(index: number, value: number) {
        let newRange = [this.someRange[0], this.someRange[1]];
        newRange[index] = newRange[index] + value;
        this.someRange = newRange;
    }

    blinkKeyupLabel() {
        this.keyupLabelOn = true;
        setTimeout(() => {
            this.keyupLabelOn = false;
        }, 450);
    }

    blinkKeydownLabel() {
        this.keydownLabelOn = true;
        setTimeout(() => {
            this.keydownLabelOn = false;
        }, 450);
    }

    toggleDisabled() {
        const control = this.form3.controls.single;
        control.enabled ? control.disable() : control.enable();
    }
}

/* Demo note
 * Interface created just to use a generic function to change the value by clicking the buttons
 */
interface Number {
    value: number;
}
