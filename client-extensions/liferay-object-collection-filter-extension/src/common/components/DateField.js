import React from 'react';
import ClayDatePicker from '@clayui/date-picker';

const spritemap = `${window.Liferay.ThemeDisplay.getPathThemeImages()}/clay/icons.svg`;
const DateField = ({fieldName}) => {

    return (
        <ClayDatePicker
            placeholder="YYYY-MM-DD - YYYY-MM-DD"
            range
            spritemap={spritemap}
            years={{
                end: 2024,
                start: 1997
            }}
        />
    )
}
export default DateField