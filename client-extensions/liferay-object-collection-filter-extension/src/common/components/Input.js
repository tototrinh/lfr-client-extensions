import React from 'react';
import {ClayInput} from "@clayui/form";
import './Input.scss';
const Input = ({label, name}) => {
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
                        type="text"
                    />
                </div>
            </div>
        </>

    )
}
export default Input