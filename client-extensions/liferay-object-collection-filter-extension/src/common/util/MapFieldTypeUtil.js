/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

const mapFieldType = (sourceType) => {
    const typeMapping = {
        'Boolean': 'boolean',
        'Date': 'date',
        'BigDecimal': 'numeric',
        'Integer': 'numeric',
        'Long': 'numeric',
        'String': 'string'
    };
  
    const targetType = typeMapping[sourceType] || 'unknown';
  
    return targetType;
  };
  
  export { mapFieldType };