/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React, { useState, useEffect } from 'react';
import ClayButton from '@clayui/button';
import DropDown from '@clayui/drop-down';
import { fetchObjects } from '../services/objectDefinition';

const SelectObjectDefinition = ({ onSelect, onItem }) => {
    const [data, setData] = React.useState([]);
    const [active, setActive] = React.useState(false); 
  
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
  
    return (
      <DropDown
        filterKey="name"
        trigger={<ClayButton>Choose Object</ClayButton>}
        active={active} 
        onActiveChange={(newActiveState) => setActive(newActiveState)} 
      >
        <DropDown.ItemList items={data}>
          {(item) => (
            <DropDown.Item
              key={item.name}
              onClick={() => {
                const arrayFromObjectFields = Array.from(item.objectFields);
                onSelect(arrayFromObjectFields);
                onItem(item.name);
                setActive(false);
              }}
            >
              {item.name}
            </DropDown.Item>
          )}
        </DropDown.ItemList>
      </DropDown>
    );
};

export default SelectObjectDefinition;
