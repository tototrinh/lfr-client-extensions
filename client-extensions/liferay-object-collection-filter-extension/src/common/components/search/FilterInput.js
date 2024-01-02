import React from 'react';
import BooleanField from './filter-field/BooleanField';
import DateField from "./filter-field/DateField";
import NumericField from "./filter-field/NumericField";

const FilterInput = ({ fieldLabel, fieldName, fieldType, onUpdateFilter, value }) => {
    const InputComponent = {
        boolean: BooleanField,
        date: DateField,
        numeric: NumericField
    }[fieldType];

    return (
        <div className="filter-input">
            <label>{fieldLabel}</label>
            {InputComponent && <InputComponent fieldName={fieldName} fieldType={fieldType} onUpdateFilter={onUpdateFilter} value={value} />}
        </div>
    );
};

export default FilterInput;