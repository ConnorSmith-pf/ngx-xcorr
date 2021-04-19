import { inject, TestBed } from '@angular/core/testing';

import { CsXCorrService } from './cs-xcorr';
import { XCorr } from './interfaces/XCorr.model';

describe('cs-xcorr', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CsXCorrService]
        });
    });

    it('should be created', inject([CsXCorrService], (xcorr: CsXCorrService) => {
        expect(xcorr).toBeTruthy();
    }));

    it('should be created', inject([CsXCorrService], (xcorr: CsXCorrService) => {
        const sig1 = [0, 6, 0, 0, 0, 4, 0, 2, 0, 16, 0, 2];
        const sig2 = [0, 1, 0, 3, 0, 0, 0, 2, 0, 1, 0, 8]; // half the values of sig1
        const xCorr1: XCorr = xcorr.xCorr(sig1, sig2);
        const xCorr2: XCorr = xcorr.xCorr(sig2, sig1);

        expect(xCorr1.iMax).toEqual(-1);
        expect(xCorr2.iMax).toEqual(1);
    }));
});
