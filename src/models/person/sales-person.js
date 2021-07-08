import { Person } from './person';

export class SalesPerson extends Person {
    name;

    constructor(name) {
        super(Person.SALES_PERSON);
        this.name = name;
    }
}