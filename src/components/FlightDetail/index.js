import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

import carriers from '../../config/carriers';
import styles from "./styles";

export function getCarrierNames(carriersArray, airlines) {
    const filteredCarriers = airlines.map((airline) => carriersArray.find(({ id }) => id === airline));
    return filteredCarriers.map(({ name }) => name).join(' - ');
}

const FlightDetail = ({ flyDuration, airlines, price, link }) => {
    const carrierNames = getCarrierNames(carriers, airlines);

    return (
        <li css={styles}>
            <div className="flight__box">
                <h3><a className="flight__link" href={link} target="_blank" rel="noopener noreferrer">{carrierNames}</a></h3>
                <p>Flight duration: {flyDuration}</p>
            </div>
            <p className="flight__price">€ {price}</p>
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
