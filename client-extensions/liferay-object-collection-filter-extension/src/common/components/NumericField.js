import React from 'react';
import ClayDropdown from "@clayui/drop-down";
import ClayButton from "@clayui/button";
import Input from "./Input";

const NumericField = ({fieldName, fieldType}) => {

    return (
        <>
            <label>{fieldName}</label>
            <ClayDropdown
                className="dropdown-menu-width-shrink"
                trigger={
                    <ClayButton
                        displayType="secondary"
                        className="bg-light font-weight-normal form-control-select text-left w-100"

                    >
                        {fieldType}
                    </ClayButton>
                }
            >
                <>
                    <Input name="min" label="Min"/>
                    <Input name="max" label="Max"/>
                </>
            </ClayDropdown>
        </>


    )
}
export default NumericField