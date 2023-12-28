import React from 'react';
import BooleanField from './field/BooleanField';
import DateField from "./field/DateField";
import NumericField from "./field/NumericField";

const FilterInput = ({ fieldName, fieldType, onUpdateFilter }) => {
    const InputComponent = {
        boolean: BooleanField,
        date: DateField,
        numeric: NumericField
    }[fieldType];

    return (
        <div className="filter-input">
            <label>{fieldName}</label>
            {InputComponent && <InputComponent fieldName={fieldName} fieldType={fieldType} onUpdateFilter={onUpdateFilter} />}
        </div>
    );
};

export default FilterInput;