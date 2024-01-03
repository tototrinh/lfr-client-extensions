/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import Search from '../../page/Search.js';
import {Liferay} from './liferay.js';
import axios from 'axios'

const {REACT_APP_LIFERAY_HOST = window.location.origin} = process.env;

const baseFetch = async (method = "GET", url, body = {}, options = {}) => {
	try {
		const response = await axios({
			method,
			url: `${REACT_APP_LIFERAY_HOST}/${url}`,
			headers: {
				'Content-Type': 'application/json',
				'x-csrf-token': Liferay.authToken,
				...options.headers,
			},
			data: body,
			...options,
		});

		return response.data;
	} catch (error) {
		throw error; // Re-throw the error for further handling
	}
};

export default baseFetch;
