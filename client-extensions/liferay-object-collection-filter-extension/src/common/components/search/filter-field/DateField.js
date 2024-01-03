import React, {useEffect, useRef, useState} from 'react';
import ClayDatePicker from '@clayui/date-picker';
import {spritemapPath} from "../../../services/liferay";

const DateField = ({fieldName, fieldType, onUpdateFilter, value}) => {
    const [dateRange, setDateRange] = useState('');
    const dateFormat = "yyyy-MM-dd";
    const dateRef = useRef(null);

    useEffect(() => {
        const datePicker = document.querySelector(
            `#${fieldName}DatePicker`
        );

        if (datePicker) {
          datePicker.setAttribute("disabled", true);
        }

        if (value == null) {
            setDateRange('');
        }

    }, [value]);

    function handleChange(newDateRange) {
        setDateRange(newDateRange)
        const [startDate, endDate] = newDateRange.split(" - ");
        onUpdateFilter(fieldName, fieldType, [startDate, endDate]);
    }
    return (
        <div className="btn btn-secondary p-0">
            <ClayDatePicker
                range
                id={`${fieldName}DatePicker`}
                spritemap={spritemapPath}
                years={{
                    end: 2050,
                    start: 1997
                }}
                placeholder="YYYY-MM-DD - YYYY-MM-DD"
                value={dateRange}
                onChange={(e)=>handleChange(e)}
                dateFormat={dateFormat}
                ref={dateRef}
            />
        </div>
    )
}
export default DateField