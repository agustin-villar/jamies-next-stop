import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, label, placeholder, type, onChange }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <label>{label}</label>
            <input
                name={name}
                placeholder={placeholder}
                type={type}
                value={inputValue}
                onChange={(e) => {
                    const { target: { value }} = e;
                    setInputValue(value);
                    onChange({ [name]: value });
                }}
                required
            />
        </div>
    );
};

Input.defaultProps = {
    placeholder: '',
    type: 'text',
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
};

export default Input;
