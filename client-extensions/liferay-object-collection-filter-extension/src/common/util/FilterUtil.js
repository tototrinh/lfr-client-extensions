export const getFilterValue = (
    filters: [],
    fieldName: '',
) => {
    if(filters?.length > 0) {
        return filters.find( filter => filter.property === fieldName)
    }

    return null;
}