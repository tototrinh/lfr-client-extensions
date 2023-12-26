import React from 'react';

const FilterForm = ({ selectedFields }) => {
    return (
        <div className="filter-list">
            {selectedFields.map((field) => (
                <div>{field.fieldName}</div>
            ))}
        </div>
    );
};

export default FilterForm;