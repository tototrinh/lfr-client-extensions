/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': `Basic ${window.btoa('test@liferay.com:t')}`,
};

const fetchObjects = async () => {
  try {
    const response = await fetch(
      `http://localhost:8080/o/object-admin/v1.0/object-definitions`,
      {
        headers: HEADERS,
        method: 'GET',
      }
    );

    if (!response.ok) {
      throw new Error('Request Error');
    }

    const data = await response.json();
    const filteredItems = data.items.filter((item) => item.modifiable === true);

    return filteredItems;
  } catch (error) {
      console.error('Error fetching objects:', error);
      throw error;
  }
};

export { fetchObjects };

  