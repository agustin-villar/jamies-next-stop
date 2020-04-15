import React from 'react';
import PropTypes from 'prop-types';

const TripColumn = ({ cityName, weatherParams, flightParams }) => {

    return (
        <div>
            <h2>{cityName}</h2>
            <ol>
                <li>Mon</li>
                <li>Mon</li>
                <li>Mon</li>
                <li>Mon</li>
            </ol>
            <hr />
            <ol>
                <li>Mon</li>
                <li>Mon</li>
                <li>Mon</li>
                <li>Mon</li>
            </ol>
        </div>
    );
};

TripColumn.propTypes = {
    cityName: PropTypes.string.isRequired,
    weatherParams: PropTypes.shape({}).isRequired,
    flightParams: PropTypes.shape({}).isRequired,
};

export default TripColumn;
