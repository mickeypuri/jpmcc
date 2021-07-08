import { Instrument } from './instrument';
import { PriceLevel } from '../level/price-level';
import { SpreadLevel } from '../level/spread-level';

export class EquityInstrument extends Instrument {
    constructor() {
        super(Instrument.EQUITY, [new PriceLevel(), new SpreadLevel()]);
    }
}