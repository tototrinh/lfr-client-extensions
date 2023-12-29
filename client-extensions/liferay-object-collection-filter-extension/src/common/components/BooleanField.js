import React, {useEffect, useState} from 'react';
import ClayDropdown from "@clayui/drop-down";
import ClayButton from "@clayui/button";
import ClayDropDown from "@clayui/drop-down";

const BooleanField = ({fieldName, fieldType, handleFilterChange = (property, type, values)=>{}}) => {
    const [show, setShow] = useState(false);

    const [item, setItem] = useState(null);
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

    function handleChange(item) {
        setShow(false);
        handleFilterChange(fieldName, fieldType, [item.value]);
        setItem(item);
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
                        {item ? item.label:"None"}
                    </ClayButton>
                }
            >
                <>
                    <ClayDropDown.ItemList>
                        {items.map((item, index) => (
                            <ClayDropDown.Item
                                key={index}
                                onClick={() => handleChange(item)}
                            >
                                {item.label}
                            </ClayDropDown.Item>
                        ))}
                    </ClayDropDown.ItemList>
                </>
            </ClayDropdown>
        </>
    )
}
export default BooleanField