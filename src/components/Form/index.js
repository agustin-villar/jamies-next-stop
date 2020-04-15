import React from 'react';
import Input from "../Input";

const Form = () => (
    <form>
        <Input label="Flying from:" name="fly_from" onChange={(data) => console.log(data)} />
        <div>
            <span>Flying to:</span>
            <button>Select one or more cities</button>
            <label><input name="fly_to" type="checkbox" value="AMS"/>Amsterdam</label>
            <label><input name="fly_to" type="checkbox" value="BUD"/>Budapest</label>
            <label><input name="fly_to" type="checkbox" value="MAD"/>Madrid</label>
        </div>
        <Input label="Flight date:" name="date_from" type="date" onChange={(data) => console.log(data)} />
        <button type="submit"/>
    </form>
);

export default Form;
