import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {WEATHER_API_URL, WEATHER_API_KEY, PROXIED_FLIGHTS_URL} from '../../config/apisConfig';
import WeatherDetail from '../WeatherDetail';

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
        <div>
            <h2>{cityName}</h2>
            <ol>
                {weatherData.map(({ Date, Temperature: { Maximum: { Value: max }, Minimum: { Value: min } } }) => (
                    <WeatherDetail key={Date} date={Date} min={min} max={max} />
                ))}
            </ol>
            <p>{weatherHeadline}</p>
            <hr />
            <ol>
                {flightsData.map(({ fly_duration }) => (
                    <li>{fly_duration}</li>
                ))}
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
