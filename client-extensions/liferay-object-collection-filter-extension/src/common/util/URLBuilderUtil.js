export const getFilterByType = (type = "", property = "", values = []) => {
    switch (type) {
        case "boolean":
            return `${property} eq ${values[0]}`;
        case "numeric":
			return `${property} ge ${values[0]} and ${property} le ${values[1]}`;
        case "date":
            return `${property} ge '${values[0]}' and ${property} le '${values[1]}'`;
        case "picklist":
            return `${property} eq '${values[0]}'`;
        case "multiple-picklist":
            return `${values.map((value) => `${property}/any(p:p eq '${value}')`).join(" and ")}`;
        default:
            return "";
    }
};

export const getFilter = (filters = []) => {
    return filters.reduce((filterValue, filter) => {
        const filterByProperty = getFilterByType(filter.type, filter.property, filter.values);
        return filterByProperty ?
            (filterValue ? `${filterValue} and ${filterByProperty}` : filterByProperty) :
            filterValue;
    }, "");
};

export const buildParams = (keywords = "", filters = []) => {
    const urlSearchParams = new URLSearchParams();

    urlSearchParams.append("filter", getFilter(filters));
    urlSearchParams.append("search", keywords);

    return urlSearchParams.toString().replaceAll("+", "%20");
};