/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */
import {BUSINESS_TYPES_TO_FILTER_TYPES} from "./constants";

const defaultLanguageId = Liferay.ThemeDisplay.getDefaultLanguageId();
const userLanguageId = Liferay.ThemeDisplay.getLanguageId();

export function getLocalizeLabel(
    creationLanguageId: Liferay.Language.Locale,
    labels: LocalizedValue<string> | undefined,
    fallback?: string
) {
    if (!labels) {
        return fallback ?? '';
    }

    return (
        labels[userLanguageId] ??
        labels[defaultLanguageId] ??
        labels[creationLanguageId] ??
        fallback ??
        ''
    );
}

export function mapFieldType(type){
    return BUSINESS_TYPES_TO_FILTER_TYPES[type] || 'unknown'; // Return mapped value or original if not found
}

export function mapFieldName(name){

    if (name === 'createDate') {
        return 'dateCreated';
    }

    if (name === 'modifiedDate') {
        return 'dateModified';
    }

    return name;
}

