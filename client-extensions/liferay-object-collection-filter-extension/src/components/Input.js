import React from 'react';
import {ClayInput} from "@clayui/form";
const Input = ({label, name}) => {
    return (
        <>
            <div className="w-100" style={{display: 'flex', justifyContent: 'space-around'}}>
                <label htmlFor={label} style={{margin: '10px'}}>
                    {label}
                </label>
                <div style={{width: '70%'}}>
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