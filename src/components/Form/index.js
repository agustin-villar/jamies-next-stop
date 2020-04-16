import React, { useState } from 'react';

import LocationInput from "../LocationInput";
import Input from "../Input";
import MultiSelect from "../MultiSelect";
import cities from "../../config/cities";

const Form = ({ onSubmit }) => {
    const [flyFrom, setFlyFrom] = useState({});
    const [flyTo, setFlyTo] = useState([]);
    const [dateFrom, setDateFrom] = useState({});

    const formData = { ...flyFrom, flyTo, ...dateFrom};

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit(formData);
        }}>
            <LocationInput label="Flying from:" name="fly_from" onChange={setFlyFrom} />
            <MultiSelect
                label="Flying to:"
                name="fly_to"
                defaultText="Select one or more cities"
                options={cities}
                onChange={setFlyTo}
            />
            <Input label="Flight date:" name="date_from" type="date" onChange={setDateFrom} />
            <button type="submit">Search</button>
        </form>
    );
}

export default Form;
