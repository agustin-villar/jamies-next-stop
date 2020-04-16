import React, { useState } from 'react';
import 'styled-components/macro';

import Form from "../components/Form";
import TripColumn from "../components/TripColumn";
import cities from '../config/cities';
import styles, { gridContainerStyles } from "./styles";

function getCityDetailsFromId(cities, cityId) {
    const { key, name } = cities.find(({ id }) => id === cityId);
    return ({ key, name});
}

const Home = () => {
    const [requestsData, setRequestsData] = useState([]);

    function submitHandler(formData) {
        const { fly_from, flyTo, date_from } = formData;
        // API requires a different date format than the one provided by the input
        const formattedDate = new Date(date_from).toLocaleDateString();
        const tripsDataSet = flyTo.map((city) => {
            const { key, name } = getCityDetailsFromId(cities, city);

            return ({
                name,
                weatherData: {
                    locationKey: key,
                },
                flightData: {
                    fly_from,
                    fly_to: city,
                    date_from: formattedDate,
                },
            });
        });

        setRequestsData(tripsDataSet);
    }

    return (
        <div css={styles}>
            <header className="home__header">
                <h1 className="home__heading">Hello Jamie!</h1>
                <p className="home__tagline">What will be your next destination?</p>
            </header>
            <main>
                <Form onSubmit={submitHandler}/>
                <div css={gridContainerStyles} citiesCount={requestsData.length}>
                    {requestsData.map(({ name, flightData, weatherData }) => (
                        <TripColumn key={name} cityName={name} flightParams={flightData} weatherParams={weatherData} />
                    ))}
                </div>
            </main>
            <footer className="home__footer">
                Bon voyage ! <span role="img" aria-label="wave emoji">👋</span>
            </footer>
        </div>
    );
};

export default Home;
