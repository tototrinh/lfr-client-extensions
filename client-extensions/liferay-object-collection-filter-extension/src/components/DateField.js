import React from 'react';
import ClayDropdown from "@clayui/drop-down";
import ClayButton from "@clayui/button";
import ClayForm, {ClayCheckbox} from "@clayui/form";
import ClayDatePicker from '@clayui/date-picker';
import Input from "./Input";

const spritemap = `${window.Liferay.ThemeDisplay.getPathThemeImages()}/clay/icons.svg`;
const DateField = ({fieldName}) => {

    return (
        <>
            <label>{fieldName}</label>
            <ClayDatePicker
                placeholder="YYYY-MM-DD - YYYY-MM-DD"
                range
                spritemap={spritemap}
                years={{
                    end: 2024,
                    start: 1997
                }}
            />
        </>
    )
}
export default DateField