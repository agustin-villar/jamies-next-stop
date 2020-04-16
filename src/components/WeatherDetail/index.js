import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

import styles from "./styles";

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const WeatherDetail = ({ date, min, max }) => {
    // get day returns an index for the days of the week
    const dayName = days[new Date(date).getDay()];

    return (
        <li css={styles}>
            <h3 className="weather-detail__headline">{dayName}</h3>
            <p className="weather-detail__temperatures">
                <span>{min}°</span> - <span>{max}°</span>
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
