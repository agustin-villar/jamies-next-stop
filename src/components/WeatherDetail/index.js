import React from 'react';
import PropTypes from 'prop-types';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const WeatherDetail = ({ date, min, max }) => {
    // get day returns an index for the days of the week
    const dayName = days[new Date(date).getDay()];

    return (
        <li>
            <h3>{dayName}</h3>
            <p>
                <span>min: {min}</span>
                <span>max: {max}</span>
            </p>
        </li>
    );
};

WeatherDetail.propTypes = {
    date: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
};

export default WeatherDetail;
