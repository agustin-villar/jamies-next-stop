import React, { useState } from 'react';
import Form from "../components/Form";

import cities from '../config/cities';
import TripColumn from "../components/TripColumn";

function getCityDetailsFromId(cities, cityId) {
    const { key, name } = cities.find(({ id }) => id === cityId);
    return { key, name};
}

const Home = () => {
    const [requestsData, setRequestsData] = useState([]);

    function submitHandler(formData) {
        const { fly_from, flyTo, date_from } = formData;

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
                    date_from
                },
            });
        });

        setRequestsData(tripsDataSet);
    }

    return (
        <div>
            <header>
                <h1>Hello Jamie!</h1>
                <p>What will be your next destination?</p>
            </header>
            <main>
                <Form onSubmit={submitHandler}/>
                {requestsData.map(({ name, flightData, weatherData }) => (
                    <TripColumn key={name} cityName={name} flightParams={flightData} weatherParams={weatherData} />
                ))}
            </main>
            <footer>
                Bon voyage ! <span role="img" aria-label="wave emoji">👋</span>
            </footer>
        </div>
    );
};

export default Home;
