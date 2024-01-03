/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

export const Liferay = window.Liferay || {
	ThemeDisplay: {
		getPathThemeImages: () => "",
		isSignedIn: () => {
			return false;
		},
		getLanguageId: () => 'en_US',
		getDefaultLanguageId: () => 'en_US',
	},
	authToken: '',
};

export const spritemapPath = `${Liferay.ThemeDisplay.getPathThemeImages()}/clay/icons.svg`;
