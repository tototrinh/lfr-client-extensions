import React, {useState} from 'react';
import {ClayInput} from "@clayui/form";

const NumericItem = ({label, name, onChange, value}) => {

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
                        onChange={(e) => onChange(event.target.value)}
                    />
                </div>
            </div>
        </>
    )
}
export default NumericItem