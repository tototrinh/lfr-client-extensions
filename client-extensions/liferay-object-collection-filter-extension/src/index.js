/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import FilterSettings from "./components/FilterSettings";

const ObjectCollectionFilter = () => {

    const [filterFields, setFilterFields] = useState(null);

    function handleSettings() {
        setFilterFields({
            targetCollection: 'students',
            fieldArray: [
                {
                    fieldName: 'age', fieldType: 'numeric'
                },
                {
                    fieldName: 'gender', fieldType: 'boolean'
                },
                {
                    fieldName: 'date', fieldType: 'date'
                },
            ]
        })
    }

    return (
        <div>
            <FilterSettings settings={filterFields}/>
            <button onClick={() => handleSettings()}> Save </button>
        </div>
    );
}

class CustomElement extends HTMLElement {
    connectedCallback() {
        ReactDOM.render(React.createElement(ObjectCollectionFilter), this);
    }

    disconnectedCallback() {
        ReactDOM.unmountComponentAtNode(this);
    }
}

const ELEMENT_NAME = 'liferay-object-collection-filter-extension';

if (!customElements.get(ELEMENT_NAME)) {
    customElements.define(ELEMENT_NAME, CustomElement);
}
