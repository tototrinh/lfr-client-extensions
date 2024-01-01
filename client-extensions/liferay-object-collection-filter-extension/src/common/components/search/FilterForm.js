import React from 'react';
import FilterInput from "./FilterInput";

const FilterForm = ({ selectedFields, onUpdateFilter }) => {
    return (
        <div className="filter-list">
            {selectedFields.map((field) => (
                <div className="d-inline-block">
                    <FilterInput fieldLabel={field.label} fieldName={field.value} fieldType={field.type} onUpdateFilter={onUpdateFilter}/>
                </div>
            ))}
        </div>
    );
};

export default FilterForm;