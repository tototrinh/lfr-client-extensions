import React from 'react';
import FilterForm from './FilterForm'
const FilterSettings = ({settings}) => {
    return (
        <div>
            {settings && settings.fieldArray && settings.fieldArray.map((item) => (
                <div className="d-inline-block">
                    <FilterForm fieldName={item.fieldName} fieldType={item.fieldType}/>
                </div>
            ))}
        </div>
    )
}
export default FilterSettings