import React, {useEffect, useState} from 'react';
import ClayDatePicker from '@clayui/date-picker';
import {spritemapPath} from "../../../services/liferay";

const DateField = ({fieldName, fieldType, onUpdateFilter = (property, type, values)=>{}}) => {
    const dateFormat = "yyyy-MM-dd";
    const [start,setStart] = useState(null);
    const [end, setEnd] = useState(null);

    function handleChange(e) {
        let array = e.split(" - ");
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
                onChange={(e)=>handleChange(e)}
                dateFormat={dateFormat}
            />
        </>

    )
}
export default DateField