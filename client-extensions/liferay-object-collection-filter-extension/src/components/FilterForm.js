import React from 'react';
import NumericField from "./NumericField";
import BooleanField from "./BooleanField";
import DateField from "./DateField";

const FilterForm = ({fieldName, fieldType}) => {

    let input = null;
    if (fieldType == 'numeric') {
        input = <NumericField fieldName={fieldName} fieldType={fieldType}/>
    } else if (fieldType == 'boolean') {
        input = <BooleanField fieldName={fieldName} fieldType={fieldType}/>
    } else if (fieldType == 'date') {
        input = <DateField fieldName={fieldName}/>
    }
    return (
        <div style={{margin: '10px', width: '300px'}}>
            {input}
        </div>
    )
}
export default FilterForm