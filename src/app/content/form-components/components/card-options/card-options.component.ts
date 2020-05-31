import { Component, OnInit } from '@angular/core';
import {
    faPaypal,
    faGoogleWallet,
    faGoogle
} from '@fortawesome/free-brands-svg-icons';
import { faUniversity, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { ColorScheme } from '@app/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'prx-card-options',
    templateUrl: './card-options.component.html',
    styleUrls: ['./card-options.component.scss']
})
export class CardOptionsComponent implements OnInit {
    addresses = [
        {
            name: 'Home',
            address: '123 Third Avenue, 24th Floor, City, Country'
        },
        {
            name: 'Office',
            address: '123 Fifth Avenue, 12th Floor, City, Country'
        },
        {
            name: 'Vacations',
            address: '123 Third Avenue, 24th Floor, City, Country'
        }
    ];
    selectedAddress: any;

    paymentMethods = [
        {
            id: 'paypal',
            name: 'Paypal',
            icon: faPaypal
        },
        {
            id: 'credit-card',
            name: 'Credit Card',
            icon: faCreditCard
        },
        {
            id: 'bank-transfer',
            name: 'Bank Transfer',
            icon: faUniversity
        },
        {
            id: 'google-wallet',
            name: 'Google Wallet',
            icon: faGoogleWallet
        }
    ];

    ColorScheme = ColorScheme;

    paymentTypeModel: any;
    form: FormGroup;
    paymentForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.form = this.fb.group({
            shippingAddress: []
        });

        this.paymentForm = this.fb.group({
            paymentType: []
        });
    }

    addressChanged(address: any) {
        this.selectedAddress = address;
    }

    onSubmit() {
        alert(JSON.stringify(this.form.value));
    }
}
