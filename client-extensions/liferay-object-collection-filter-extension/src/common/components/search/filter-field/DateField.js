import React, {useEffect, useRef, useState} from 'react';
import ClayDatePicker from '@clayui/date-picker';
import {spritemapPath} from "../../../services/liferay";

const DateField = ({fieldName, fieldType, onUpdateFilter,value}) => {
    const [dateRange, setDateRange] = useState('');
    const dateFormat = "yyyy-MM-dd";
    const dateRef = useRef(null);

    useEffect(() => {
        dateRef.current.setAttribute("disabled", true);
        if(value == null) {
            setDateRange('');
        }
    }, [value]);

    function handleChange(e) {
        let array = e.split(" - ");
        setDateRange(e)
        onUpdateFilter(fieldName, fieldType, array);
    }
    return (
        <>
            <ClayDatePicker
                range
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
        </>

    )
}
export default DateField