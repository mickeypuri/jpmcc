export class Order {
    person;
    instrument;
    amount;

    toString() {
        console.log(`${person.name}`);
        this.instrument.print();
        console.log(`Amount: ${this.amount}`);
    }

    constructor(person, instrument, amount) {
        this.person = person;
        this.instrument = instrument;
        this.amount = amount;
    }
}