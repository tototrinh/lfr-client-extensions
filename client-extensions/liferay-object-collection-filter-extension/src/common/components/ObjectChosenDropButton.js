/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React, { useState, useEffect } from 'react';
import ClayButton from '@clayui/button';
import DropDown from '@clayui/drop-down';
import { useModal } from '@clayui/modal';
import { ClayLayout } from '@clayui/layout';

const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': `Basic ${window.btoa('test@liferay.com:t')}`,
};

const ObjectChosenDropButton = ({ onSelect, onItem }) => {
    const [data, setData] = React.useState([]);
    const [active, setActive] = React.useState(false); 
  
    const fetchObjects = () => {
      return fetch(
        `http://localhost:8080/o/object-admin/v1.0/object-definitions`,
        {
          headers: HEADERS,
          method: 'GET',
        }
      )
        .then((response) => response.json())
        .then((d) => {
          const filteredItems = d.items.filter((item) => item.modifiable === true);
          setData(filteredItems);
        });
    };
  
    React.useEffect(() => {
      fetchObjects();
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

export default ObjectChosenDropButton;
