import React, {useState} from 'react';
import {ClayInput} from "@clayui/form";

const NumericItem = ({label, name, onChange, value}) => {

    const handleChange = (event) => {
        const newValue = event.target.value;

        if (newValue !== '' && !isNaN(newValue)) {
            onChange(newValue);
        }
    };

    return (
        <>
            <div className="w-100 input">
                <label htmlFor={label}>
                    {label}
                </label>
                <div>
                    <ClayInput
                        aria-label={label}
                        id={name}
                        name={name}
                        type="number"
                        value={value}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </>
    )
}
export default NumericItem