import React, {useState} from 'react';
import ClayDropdown from "@clayui/drop-down";
import ClayButton from "@clayui/button";
import ClayForm, {ClayCheckbox} from "@clayui/form";
import ClayDropDown from "@clayui/drop-down";

const BooleanField = ({fieldName, fieldType}) => {

    const [checked, setChecked] = useState({label: 'None', value: null});

    const [filters, setFilters] = useState([]);

    const [booleanField, setBooleanField] = useState(null);

    const items = [
        {
            label: 'None',
            value: null
        },
        {
            label: 'True',
            value: true
        },
        {
            label: 'False',
            value: false
        }
    ]

    function handleChange(value) {
        let index = getIndex(fieldName);
        if (index === -1) {
            setFilters([...filters, {type: fieldType, property: fieldName, values: [value]}]);
        } else {
            let newFilters = [...filters];
            newFilters[index] = {type: fieldType, property: fieldName, values: [value]}
            setFilters(newFilters);
        }

    }

    function getIndex(fieldName) {
        return filters.findIndex(obj => obj.property === fieldName);
    }

    return (
        <>
            <ClayDropdown
                className="dropdown-menu-width-shrink"
                trigger={
                    <ClayButton
                        displayType="secondary"
                        className="bg-light font-weight-normal form-control-select text-left w-100"
                    >
                        {fieldType}
                    </ClayButton>
                }
            >
                <>
                    <ClayDropDown.ItemList>
                        {items.map(({label, value}, index) => (
                            <ClayDropDown.Item
                                key={index}
                                onClick={() => handleChange(value)}
                            >
                                {label}
                            </ClayDropDown.Item>
                        ))}
                    </ClayDropDown.ItemList>
                </>
            </ClayDropdown>
        </>
    )
}
export default BooleanField