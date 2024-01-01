export const getFilterByType = (type = "", property = "", values = []) => {
    switch (type) {
        case "boolean":
            return `${property} eq ${values[0]}`;
        case "numeric":
        case "date":
            return `${property} ge ${values[0]} and ${property} le ${values[1]}`;
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

export const buildParams = (keywords = "", filters = [],page = -1, pageSize = -1) => {
    const urlSearchParams = new URLSearchParams();

    urlSearchParams.append("filter", getFilter(filters));

    if(page >= 0) {
        urlSearchParams.append("?page", page)
    }

    if(pageSize >= 0) {
        urlSearchParams.append('?pageSize', pageSize)
    }

    urlSearchParams.append("?search", keywords);

    return urlSearchParams.toString().replaceAll("+", "%20");
};