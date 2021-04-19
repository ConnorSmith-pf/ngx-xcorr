import { Buffer } from 'buffer';
import { toBuffer } from './helpers/to-buffer';
import { XCorr } from './interfaces/XCorr.model';

import * as lib from 'cs-xcorr/xcorr.js';

export class CsXCorr {
    public xCorrLib: any = lib;

    public xCorr(dataset1: Array<number> | Buffer, dataset2: Array<number> | Buffer): XCorr {
        const [buffer1, buffer2] = [
            Array.isArray(dataset1) ? toBuffer(dataset1) : dataset1,
            Array.isArray(dataset2) ? toBuffer(dataset2) : dataset2
        ];

        return this.xCorrLib.Xcorr(buffer1, buffer2);
    }
}
