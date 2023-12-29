import React, {useState} from 'react';
import {ClayInput} from "@clayui/form";

const NumericInput = ({label, name, fieldName, fieldType, handleFilterChange = (property, type, values)=>{}}) => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const handleChange = (name, event) => {
        if (name === 'min') setMin(event.target.value);
        if (name === 'max') setMax(event.target.value);
        handleFilterChange(fieldName, fieldType, [min, max]);
    }
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
                        onChange={(e) => handleChange(name, e)}
                    />
                </div>
            </div>
        </>
    )
}
export default NumericInput