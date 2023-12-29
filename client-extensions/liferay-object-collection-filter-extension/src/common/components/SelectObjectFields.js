/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React, { useState } from 'react';
import { ClayDualListBox } from '@clayui/form';
import { spritemapPath } from '../services/liferay';

const SelectObjectFields = ({ objectFields, selectedFields, onSelect }) => {

    const [available, setAvailable] = useState([]);
    const [selected, setSelected] = useState([]);

    const [items, setItems] = useState([selectedFields, objectFields.filter((field) => !selectedFields.includes(field))]);

    const handleItemsChange = (items) => {
        setItems(items);
        onSelect({
            selectedFields: items[0]
        });
    }

    return (
        <ClayDualListBox
            items={items}
            left={{
                label: "In Use",
                onSelectChange: setSelected,
                selected: selected
            }}
            onItemsChange={(items) => handleItemsChange(items)}
            right={{
                label: "Available",
                onSelectChange: setAvailable,
                selected: available
            }}
            size={objectFields.length}
            spritemap={spritemapPath}
        />
    );

};

export default SelectObjectFields;
