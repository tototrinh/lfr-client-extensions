import React, {useState} from 'react';
import {ClayInput} from "@clayui/form";

const NumericItem = ({label, name, onChange}) => {

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
                        onChange={(e) => onChange(event.target.value)}
                    />
                </div>
            </div>
        </>
    )
}
export default NumericItem