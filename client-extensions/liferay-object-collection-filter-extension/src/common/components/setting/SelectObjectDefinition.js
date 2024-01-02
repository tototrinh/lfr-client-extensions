/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React, { useState, useEffect } from 'react';
import ClayButton from '@clayui/button';
import ClayDropdown from '@clayui/drop-down';
import { fetchObjects } from '../../services/objectDefinition';
import { getLocalizeLabel, mapFieldName, mapFieldType } from '../../util/DataMapperUtil';
import {SUPPORTED_FIELD_TYPES} from "../../util/constants";

const SelectObjectDefinition = ({ selectedObject, onSelect, setObjectFields }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchObjects();
                setData(result);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching objects:', error);
            }
        };

        fetchData();
    }, []);

    const handleSelect = (object) => {

        const objectFields = Array.from(object.objectFields)
            .filter(({ name, system}) => (!system || name === 'createDate' || name === 'modifiedDate'))
            .map(({ businessType, defaultLanguageId, indexed, label, name }) => ({
                label: getLocalizeLabel(defaultLanguageId, label, name),
                value: mapFieldName(name),
                type: mapFieldType(businessType),
                indexed
            }));

        const selectableFields = objectFields.filter(
            ({type, indexed}) => indexed && SUPPORTED_FIELD_TYPES.has(type)
        );

        onSelect({
            selectedObject: {
                name: getLocalizeLabel(
                    object.defaultLanguageId,
                    object.label,
                    object.name
                 ),
                restContextPath: object.restContextPath.slice(1),
                objectFields
            },
            selectedFields: [],
            selectableFields
        });

        setActive(false);
    };

    return (
        <div>
            {isLoading ? (
                <p>Loading data...</p>
            ) : (
                <ClayDropdown
                    className="dropdown-menu-width-shrink"
                    filterKey="name"
                    trigger={
                        <ClayButton
                        displayType="secondary"
                        className="bg-light font-weight-normal form-control-select text-left w-100"
                        >
                            {selectedObject?.name || 'Select Object'}
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
                                {getLocalizeLabel(
                                     item.defaultLanguageId,
                                     item.label,
                                     item.name
                                )}
                            </ClayDropdown.Item>
                        )}
                    </ClayDropdown.ItemList>
                </ClayDropdown>
            )}
        </div>
    );
};

export default SelectObjectDefinition;
