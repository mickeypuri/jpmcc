import React from 'react';

import { SalesPerson } from '../../models/person/sales-person';
import { EquityInstrument } from '../../models/instrument/equity-instrument';
import { GiltInstrument } from '../../models/instrument/gilt-instrument';

import View from './order.view';

const Order = () => {

    const instruments = [new EquityInstrument(), new GiltInstrument()];
    const salesPeople = [new SalesPerson('Mike'), new SalesPerson('Joanne'), new SalesPerson('Fred')];

    return (
    <View
        salesPeople={salesPeople}
        instruments={instruments}
    />
    );

};

export default Order;