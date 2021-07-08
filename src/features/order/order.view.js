import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../common/components/header/header';
import OrderEntry from './orderEntry/order-entry.container';

const OrderView = ({
    salesPeople,
    instruments
}) => (
    <div>
        <Header title="Order Entry" />
        <OrderEntry 
            salesPeople={salesPeople}
            instruments={instruments}
        />
    </div>
);

OrderView.propTypes = {
    salesPeople: PropTypes.arrayOf(PropTypes.object).isRequired,
    instruments: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default OrderView;