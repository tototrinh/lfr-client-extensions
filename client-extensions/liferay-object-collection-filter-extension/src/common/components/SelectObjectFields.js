/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React, { useState, useEffect } from 'react';
import { ClayDualListBox } from '@clayui/form';
import { spritemapPath } from '../services/liferay';

const SelectObjectFields = ({ selectedFields, objectFields, onSelect }) => {

    const [items, setItems] = useState([selectedFields, objectFields.filter((field) => !selectedFields.includes(field))]);

    const handleItemsChange = (items) => {
        setItems(items);
        onSelect({
            selectedFields: items[0]
        });
    }

    useEffect(() => {
        const availableFields = objectFields.filter((field) => !selectedFields.includes(field));

        setItems([selectedFields, availableFields]);

    }, [objectFields, selectedFields]);

    return (
        <ClayDualListBox
            items={items}
            left={{
                label: "In Use",
            }}
            onItemsChange={handleItemsChange}
            right={{
                label: "Available",
            }}
            size={8}
            spritemap={spritemapPath}
        />
    );

};

export default SelectObjectFields;
