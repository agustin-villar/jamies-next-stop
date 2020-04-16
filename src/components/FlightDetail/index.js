import React from 'react';
import PropTypes from 'prop-types';

import carriers from '../../config/carriers';

export function getCarrierNames(carriersArray, airlines) {
    const filteredCarriers = airlines.map((airline) => carriersArray.find(({ id }) => id === airline));
    return filteredCarriers.map(({ name }) => name).join(' - ');
}

const FlightDetail = ({ flyDuration, airlines, price, link }) => {
    const carrierNames = getCarrierNames(carriers, airlines);

    return (
        <li>
            <div>
                <h3><a href={link} target="_blank" rel="noopener noreferrer">{carrierNames}</a></h3>
                <p>{flyDuration}</p>
            </div>
            <p>{price}</p>
        </li>
    );
};

FlightDetail.propTypes = {
    flyDuration: PropTypes.string.isRequired,
    airlines: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
};

export default FlightDetail;
