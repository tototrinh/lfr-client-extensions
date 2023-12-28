import React from 'react';
import ClayDropdown from "@clayui/drop-down";
import ClayButton from "@clayui/button";
import NumericInput from "./NumericInput";

const NumericField = ({fieldName, fieldType}) => {

    return (
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
            <div>
                <NumericInput name="min" label="Min"/>
                <NumericInput name="max" label="Max"/>
            </div>
        </ClayDropdown>
    )
}
export default NumericField