import React, { useState } from 'react';
import PropTypes from 'prop-types';

import View from './order-entry.view';
import { Instrument } from '../../../models/instrument/instrument';

const OrderEntry = ({
    salesPeople,
    instruments
}) => {
    const [selectedPerson, setPerson] = useState('');
    const [selectedInstrument, setInstrument] = useState('');
    const [selectedLevel, setLevel] = useState('');
    const [levelValue, setLevelValue] = useState(0);
    const [amount, setAmount] = useState(0);

    const updatePerson = event => {
        const person = event.target.value;
        setPerson(person);
    };

    const updateInstrument = event => {
        const instrument = event.target.value;
        setInstrument(instrument);
    };

    const updateLevel = event => {
        const level = event.target.value;
        setLevel(level);
    };

    const updateLevelValue = event => {
        const levelValue = event.target.value;
        setLevelValue(levelValue);
    };

    const updateAmount = ({target: {value}}) => setAmount(value);

    const confirmOrder = () => {
        console.log(`${selectedPerson.name} has ordered ${amount} units of ${selectedInstrument.type} at ${selectedLevel.type} of ${levelValue}`);
    }

    const levels = selectedInstrument instanceof Instrument ? selectedInstrument.levels : null;

    return (
        <View
            salesPeople={salesPeople}
            instruments={instruments}
            selectedPerson={selectedPerson}
            updatePerson={updatePerson}
            selectedInstrument={selectedInstrument}
            updateInstrument={updateInstrument}
            levels={levels}
            selectedLevel={selectedLevel}
            updateLevel={updateLevel}
            levelValue={levelValue}
            updateLevelValue={updateLevelValue}
            amount={amount}
            updateAmount={updateAmount}
            confirmOrder={confirmOrder}
        />
    );
};

OrderEntry.propTypes = {
    salesPeople: PropTypes.arrayOf(PropTypes.object).isRequired,
    instruments: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default OrderEntry;