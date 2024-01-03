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
    let searchParams = `filter=${encodeURIComponent(getFilter(filters))}`

    if(page >= 0) {
        searchParams = searchParams + `&page=${page}`
    }

    if(pageSize >= 0) {
        searchParams = searchParams + `&pageSize=${pageSize}`
    }

    searchParams = searchParams + `&search=${encodeURIComponent(keywords)}`

    return searchParams;
};