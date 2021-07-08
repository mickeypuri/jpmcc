import { Instrument } from './instrument';
import { PriceLevel } from '../level/price-level';
import { YieldLevel } from '../level/yield-level';

export class GiltInstrument extends Instrument {
    constructor() {
        super(Instrument.GILT, [new PriceLevel(), new YieldLevel()]);
    }
}