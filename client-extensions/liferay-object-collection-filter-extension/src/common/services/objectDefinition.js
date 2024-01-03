/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import api from './api.js';

const fetchObjects = async () => {
    try {
        const {items} = await api("GET", 'o/object-admin/v1.0/object-definitions');

        const filteredItems = items.filter((item) => item.system === false);
        return filteredItems;
    } catch (error) {
        console.error('Error fetching objects:', error);
        throw error;
    }
};

export { fetchObjects };

  