import React from 'react';
import NumericField from "./NumericField";
import BooleanField from "./BooleanField";
import DateField from "./DateField";
import './FilterInput.scss';

const FilterInput = ({fieldName, fieldType}) => {

    let input = null;
    if (fieldType == 'numeric') {
        input = <NumericField fieldName={fieldName} fieldType={fieldType}/>
    } else if (fieldType == 'boolean') {
        input = <BooleanField fieldName={fieldName} fieldType={fieldType}/>
    } else if (fieldType == 'date') {
        input = <DateField fieldName={fieldName}/>
    }
    return (
        <div className="filter-input">
            {input}
        </div>
    )
}
export default FilterInput