import React from 'react';
import {ClayInput} from "@clayui/form";

const NumericInput = ({label, name}) => {
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
                        value={0}
                        name={name}
                        type="number"
                    />
                </div>
            </div>
        </>
    )
}
export default NumericInput