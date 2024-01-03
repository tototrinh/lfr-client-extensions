import React, {useEffect, useState} from 'react';
import FilterInput from "./FilterInput";
import {getFilterValue} from "../../util/FilterUtil";

const FilterForm = ({ selectedFields, onUpdateFilter, filters}) => {
    return (
        <div className="filter-list">
            {selectedFields.map((field) => (
                <div className="d-inline-block mr-2">
                    <FilterInput
                        fieldLabel={field.label}
                        fieldName={field.value} fieldType={field.type}
                        onUpdateFilter={onUpdateFilter}
                        value={getFilterValue(filters, field.value)}
                    />
                </div>
            ))}
        </div>
    );
};

export default FilterForm;