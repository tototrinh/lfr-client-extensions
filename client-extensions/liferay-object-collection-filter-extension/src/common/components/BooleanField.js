import React, {useState} from 'react';
import ClayDropdown from "@clayui/drop-down";
import ClayButton from "@clayui/button";
import ClayDropDown from "@clayui/drop-down";

const BooleanField = ({fieldName, fieldType, handleFilterChange = (property, type, values)=>{}}) => {
    const [show, setShow] = useState(false);
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
        setShow(false);
        handleFilterChange(fieldName, fieldType, [value]);
    }

    return (
        <>
            <ClayDropdown
                className="dropdown-menu-width-shrink"
                active={show}
                onActiveChange={setShow}
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