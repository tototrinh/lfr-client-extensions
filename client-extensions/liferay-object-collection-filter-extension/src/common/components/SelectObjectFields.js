/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React, { useState } from 'react';
import ClayButton from '@clayui/button';
import DropDown from '@clayui/drop-down';
import { ClayCheckbox } from '@clayui/form';

const SelectObjectFields = ({ dataFieldKey, dataField, onSelect }) => {
    const [selectedItems, setSelectedItems] = React.useState([]);

    const handleCheckboxClick = (item) => {
      const isSelected = selectedItems.some((selectedItem) => selectedItem.fieldName === item.name);
  
      const updatedSelection = isSelected
        ? selectedItems.filter((selectedItem) => selectedItem.fieldName !== item.name)
        : [...selectedItems, { fieldName: item.name, businessType: item.businessType }];
  
      setSelectedItems(updatedSelection);
      onSelect(updatedSelection);
    };
  
    return (
      <DropDown key={dataFieldKey} filterKey="name" trigger={<ClayButton>Choose Fields</ClayButton>}>
        <DropDown.ItemList items={dataField}>
          {(item) => (
            <DropDown.Item
              key={item.name}
              onClick={() => {
                handleCheckboxClick(item);
              }}
            >
              <ClayCheckbox
                label={item.label.en_US}
                checked={selectedItems.some((selectedItem) => selectedItem.fieldName === item.name)}
              />
            </DropDown.Item>
          )}
        </DropDown.ItemList>
      </DropDown>
    );
};

export default SelectObjectFields;
