import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import axios from 'axios';

import WeatherDetail from '../WeatherDetail';
import FlightDetail from "../FlightDetail";
import {WEATHER_API_URL, WEATHER_API_KEY, PROXIED_FLIGHTS_URL} from '../../config/apisConfig';
import styles from "./styles";

const TripColumn = ({ cityName, weatherParams, flightParams }) => {
    const [weatherHeadline, setWeatherHeadline] = useState('');
    const [weatherData, setWeatherData] = useState([]);
    const [flightsData, setFlightsData] = useState([]);

    function getWeatherData(requestParams) {
        const { locationKey } = requestParams;
        return axios.get(`${WEATHER_API_URL}forecasts/v1/daily/5day/${locationKey}`, {
            params: {
                apikey: WEATHER_API_KEY,
                metric: true,
            },
        });
    }

    function getFlightsData(requestParams) {
        return axios.get(`${PROXIED_FLIGHTS_URL}flights?`, {
            params: {
                partner: 'picky',
                sort: 'price',
                limit: 10,
                ...requestParams,
            },
        });
    }

    useEffect(() => {
        axios.all([getWeatherData(weatherParams), getFlightsData(flightParams)])
            .then(axios.spread((weatherResponse, flightsResponse) => {
                const { Headline: { Text }, DailyForecasts } = weatherResponse.data;
                const { data: flightsData } = flightsResponse.data;

                setWeatherHeadline(Text);
                setWeatherData(DailyForecasts);
                setFlightsData(flightsData);
            }));
    }, [weatherParams, flightParams]);

    return (
        <div css={styles}>
            <h2 className="trip-column__heading">{cityName}</h2>
            <ol className="trip-column__weather-list">
                {weatherData.map(({ Date, Temperature: { Maximum: { Value: max }, Minimum: { Value: min } } }) => (
                    <WeatherDetail key={Date} date={Date} min={min} max={max} />
                ))}
            </ol>
            <p className="trip-column__weather-headline">{weatherHeadline}</p>
            <hr className="trip-column__hr" />
            <ol>
                {flightsData.length > 0 ?
                    (
                        flightsData.map(({ id, fly_duration, price, deep_link, airlines }) => (
                            <FlightDetail key={id} price={price} airlines={airlines} flyDuration={fly_duration} link={deep_link} />
                        ))
                    ) : (
                        <p className="trip-column__no-results">
                            No flights found under this criteria, please check the information you've entered.
                        </p>
                    )
                }
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
