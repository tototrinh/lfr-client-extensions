import React, {useEffect, useState} from 'react';
import ClayDropdown from "@clayui/drop-down";
import ClayButton from "@clayui/button";
import NumericItem from "./item/NumericItem";

const NumericField = ({fieldName, fieldType, onUpdateFilter, value}) => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);

    useEffect(() => {
        if(max >= min && max !=0 ) {
            onUpdateFilter(fieldName, fieldType, [min,max]);
        }

    }, [min, max]);

    useEffect(() => {
        if(value == null) {
            setMin(0);
            setMax(0)
        }
    }, [value]);

    return (
        <ClayDropdown
            className="dropdown-menu-width-shrink"
            trigger={
                <ClayButton
                    displayType="secondary"
                    className="bg-light font-weight-normal form-control-select text-left w-100"
                >
                    {`Min=${min} and Max=${max}`}
                </ClayButton>
            }
        >
            <div class="m-2">
                <NumericItem name="min" label="Min" fieldName={fieldName} fieldType={fieldType} onChange={setMin} value={min}/>
                <NumericItem name="max" label="Max" fieldName={fieldName} fieldType={fieldType} onChange={setMax} value={max}/>
            </div>
        </ClayDropdown>
    )
}
export default NumericField