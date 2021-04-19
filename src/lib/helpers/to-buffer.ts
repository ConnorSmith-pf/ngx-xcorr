import { Buffer } from 'buffer';

export function toBuffer(array: Array<number>): Buffer {
    return Buffer.from(array);
}
