import React from 'react';

import Input from "../Input";
import MultiSelect from "../MultiSelect";
import cities from "../../config/cities";

const Form = () => (
    <form>
        <Input label="Flying from:" name="fly_from" onChange={(data) => console.log(data)} />
        <MultiSelect
            label="Flying to:"
            name="fly_to"
            defaultText="Select one or more cities"
            options={cities}
            onChange={(data) => console.log(data)}
        />
        <Input label="Flight date:" name="date_from" type="date" onChange={(data) => console.log(data)} />
        <button type="submit">Search</button>
    </form>
);

export default Form;
