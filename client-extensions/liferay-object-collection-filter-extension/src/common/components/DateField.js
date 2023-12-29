import React from 'react';
import ClayDatePicker from '@clayui/date-picker';

const spritemap = `${window.Liferay.ThemeDisplay.getPathThemeImages()}/clay/icons.svg`;
const DateField = ({fieldName, fieldType, handleFilterChange = (property, type, values)=>{}}) => {

    function handleChange(e) {
        let array = e.split(" - ");
        handleFilterChange(fieldName, fieldType, array);
    }
    return (
        <ClayDatePicker
            range
            spritemap={spritemap}
            years={{
                end: 2024,
                start: 1997
            }}
            onChange={(e)=>handleChange(e)}
            dateFormat="yyyy-MM-dd'T'HH:mm:ss'Z'"
        />
    )
}
export default DateField