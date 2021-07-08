export class Instrument {
    static GILT = 'Gilt';
    static EQUITY = 'Equity';

    levels;
    type;

    print() {
        console.log(`Instrument Type: ${this.type}`);
        if (this.levels) {
            this.levels.forEach(level => level.print());
        } else {
            console.log('No levels to print');
        }
    }

    constructor (type, levels) {
        this.type = type;
        this.levels = levels;
    }
}