/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React, { useState, useEffect } from 'react';
import ClayButton from '@clayui/button';
import ClayDropdown from '@clayui/drop-down';
import { fetchObjects } from '../services/objectDefinition';

const SelectObjectDefinition = ({ selectedObject, onSelect }) => {
    const [data, setData] = useState([]);
    const [active, setActive] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await fetchObjects();
          setData(result);
        } catch (error) {
          console.error('Error fetching objects:', error);
        }
      };
  
      fetchData();
    }, []);

    const handleSelect = (object) => {
        const objectFields = Array.from(object.objectFields).map((field) => ({
            label: field.name,
            value: field.name,
            type: field.type
        }));

        onSelect({
            selectedObject: object.name,
            selectableFields: objectFields
        });

        setActive(false);
    };
  
    return (
        <ClayDropdown
            className="dropdown-menu-width-shrink"
            filterKey="name"
            trigger={
            <ClayButton
            displayType="secondary"
            className="bg-light font-weight-normal form-control-select text-left w-100"
            >
                {selectedObject || 'Select Object'}
            </ClayButton>
            }
            onActiveChange={(newActiveState) => setActive(newActiveState)}
        >
            <ClayDropdown.ItemList items={data}>
                {(item) => (
                    <ClayDropdown.Item
                    key={item.name}
                    onClick={() => handleSelect(item)}
                    >
                        {item.name}
                    </ClayDropdown.Item>
                )}
            </ClayDropdown.ItemList>
        </ClayDropdown>
    );
};

export default SelectObjectDefinition;
