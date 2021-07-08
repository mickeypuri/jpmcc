export class Level {
    static PRICE = 'Price';
    static SPREAD = 'Spread';
    static YIELD = 'Yield';

    #level;
    type;

    print() {
        if (this.value) {
            console.log(`${this.type} Level - ${this.#level}`);
        }
    }

    set level(value) {
        if (value < 0) {
            throw new Error('level value cannot be negative');
        }
        this.#level = value;
    }

    get level() {
        return this.#level;
    }

    constructor (type) {
        this.type = type;
    }
}