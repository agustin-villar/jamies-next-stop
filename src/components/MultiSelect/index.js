import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

import styles from "./styles";

// Get the values of the checked options in an array
function getCheckedOptions(options, option, addOption) {
    if (addOption && !options.includes(option)) {
        return [option, ...options];
    }

    if (!addOption) {
        return options.filter((options) => !options.includes(option));
    }

    return [...options];
}

// Get a string containing the names of the options checked
function getCheckedOptionsLabel(options, checkedOptions) {
    return checkedOptions.map((acronym) => options.find(({ id }) => acronym === id).name).join(', ');
}

const MultiSelect = ({ label, name, defaultText, options, onChange }) => {
    const [checkedOptions, setCheckedOptions] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const currentChoice = checkedOptions.length > 0 ? getCheckedOptionsLabel(options, checkedOptions) : defaultText;

    function openDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <div css={styles} open={isDropdownOpen}>
            <span className="multi-select__label">{label}</span>
            <button className="multi-select__button" type="button" onClick={openDropdown}>{currentChoice}</button>
            <div className="multi-select__dropdown">
                {options.map(({ name: optionName, id }) => (
                    <label className="multi-select__dropdown-item" key={id}>
                        <input
                            className="multi-select__input"
                            type="checkbox"
                            name={name}
                            value={id}
                            onChange={(e) => {
                                const { target: { value, checked } } = e;
                                const newCheckedOptions = getCheckedOptions(checkedOptions, value, checked);
                                onChange(newCheckedOptions);
                                setCheckedOptions(getCheckedOptions(newCheckedOptions));
                            }}
                        />
                        {optionName}
                    </label>
                ))}
            </div>
        </div>
    );
}

MultiSelect.propTypes = {
    defaultText: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })).isRequired,
};

export default MultiSelect;
