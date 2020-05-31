import { Pipe, PipeTransform } from '@angular/core';
import { CountryInfo } from '../models/country-summary';

@Pipe({
    name: 'searchCountry'
})
export class SearchCountryPipe implements PipeTransform {
    transform(countries: CountryInfo[], criteria: string) {
        if (typeof criteria === typeof undefined) return countries;

        return countries.filter(item =>
            item.name.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
        );
    }
}
