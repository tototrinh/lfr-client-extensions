/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ObjectCollectionFilter = () => {

    return (
        <div>
            <h1> Liferay Object Collection Filter Extension </h1>
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
