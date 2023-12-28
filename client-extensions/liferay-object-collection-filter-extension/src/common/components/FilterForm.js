import React from 'react';
import FilterInput from "./FilterInput";

const FilterForm = ({ selectedFields }) => {
    return (
        <div className="filter-list">
            {selectedFields.map((field) => (
                <div className="d-inline-block">
                    <FilterInput fieldName={field.fieldName} fieldType={field.fieldType}/>
                </div>
            ))}
        </div>
    );
};

export default FilterForm;