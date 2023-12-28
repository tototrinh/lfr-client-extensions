import React from 'react';
import NumericField from './NumericField';
import BooleanField from './BooleanField';
import DateField from './DateField';

const FilterInput = ({ fieldName, fieldType }) => {
    const InputComponent = {
        numeric: NumericField,
        boolean: BooleanField,
        date: DateField,
    }[fieldType];

    return (
        <div className="filter-input">
            <label>{fieldName}</label>
            {InputComponent && <InputComponent fieldName={fieldName} fieldType={fieldType} />}
        </div>
    );
};

export default FilterInput;