import {buildParams} from "../util/URLBuilderUtil";
import api from './api.js';

export const findObject = async (url, keyword, filters = [], page = -1, pageSize = -1) => {
	const params = buildParams(keyword, filters, page, pageSize);

	return await api("GET", `${url}/?${params}`);
}