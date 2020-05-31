import { TestBed } from '@angular/core/testing';

import { StoreBrandsService } from './store-brands.service';

describe('StoreBrandsService', () => {
    let service: StoreBrandsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(StoreBrandsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
