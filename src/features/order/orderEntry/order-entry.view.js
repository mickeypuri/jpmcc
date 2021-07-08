import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Styles from './order-entry.module.css';
import hasValue from '../../../common/utils/hasValue';

const OrderEntryView = ({
    salesPeople,
    instruments,
    selectedPerson,
    updatePerson,
    selectedInstrument,
    updateInstrument,
    levels,
    selectedLevel,
    updateLevel,
    levelValue,
    updateLevelValue,
    amount,
    updateAmount,
    confirmOrder
}) => (
    <>
        <div className={Styles['form-element']}>
            <Select id="person-selector" value={selectedPerson} onChange={updatePerson} displayEmpty>
                    <MenuItem key="default" value='' disabled>Select Person</MenuItem>
                    {
                        salesPeople.map(
                            person => (
                                <MenuItem key={person.name} value={person}>{person.name}</MenuItem>
                            )
                        )
                    }
            </Select>
        </div>

        <div className={Styles['form-element']}>
            <Select id="instrument-selector" value={selectedInstrument} onChange={updateInstrument} displayEmpty>
                    <MenuItem key="default" value='' disabled>Select Instrument</MenuItem>
                    {
                        instruments.map(
                            instrument => (
                                <MenuItem key={instrument.type} value={instrument}>{instrument.type}</MenuItem>
                            )
                        )
                    }
            </Select>
        </div>

        {levels && <div className={Styles['form-element']}>
            <Select id="level-selector" value={selectedLevel} onChange={updateLevel} displayEmpty>
                    <MenuItem key="default" value='' disabled>Select Level</MenuItem>
                    {
                        levels.map(
                            level => (
                                <MenuItem key={level.type} value={level}>{level.type}</MenuItem>
                            )
                        )
                    }
            </Select>
        </div>}

        {selectedLevel !== '' && <div className={Styles['form-element']}>
            <TextField
                id="level-value"
                label={`${selectedLevel.type} Value`}
                type="number"
                value={levelValue}
                onChange={updateLevelValue}
                InputLabelProps={{
                    shrink: true,
                }}
            />   

        </div>}

        {
            hasValue(levelValue) && <div className={Styles['form-element']}>
                <TextField
                    id="amount"
                    label="Amount"
                    type="number"
                    value={amount}
                    onChange={updateAmount}
                />
            </div>
        }

        { hasValue(amount) && <div className={Styles['form-order']}>
                <Button onClick={confirmOrder} variant="contained" >
                    {`Place order for ${amount} units of ${selectedInstrument.type} with ${selectedLevel.type} of ${levelValue}`}
                </Button>
            </div>
        }
    </>
);

OrderEntryView.propTypes = {
    salesPeople: PropTypes.arrayOf(PropTypes.object).isRequired,
    instruments: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedPerson: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    updatePerson: PropTypes.func.isRequired,
    selectedInstrument: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    updateInstrument: PropTypes.func.isRequired,
    levels: PropTypes.arrayOf(PropTypes.object),
    selectedLevel:PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    updateLevel: PropTypes.func.isRequired,
    levelValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    updateLevelValue: PropTypes.func.isRequired,
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    updateAmount: PropTypes.func.isRequired,
    confirmOrder: PropTypes.func.isRequired
};

export default OrderEntryView;