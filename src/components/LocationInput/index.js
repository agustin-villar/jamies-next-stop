import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Input from "../Input";
import {PROXIED_FLIGHTS_URL} from "../../config/apisConfig";

const LocationInput = ({ name, onChange, ...props }) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        // Don't ask for the location id from the API if the actual value is too short
        if(value && value.length > 2) {
            axios.get(`${PROXIED_FLIGHTS_URL}locations?`, {
                params: {
                    term: value,
                },
            })
                .then((response) => {
                    const {data: {locations}} = response;
                    const {code} = locations[0] || '';
                    onChange({[name]: code});
                });
        }
    }, [value, onChange, name]);

    function onChangeHandler(data) {
        setValue(data[name]);
    }

    return (
        <Input name={name} onChange={onChangeHandler} {...props} />
    );
};

LocationInput.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default LocationInput;
