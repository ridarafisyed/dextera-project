import React, { useState } from 'react';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';  

 

const Calender = () => {
    const [calDate, setCalDate] = useState(new Date())

    const  onChange = (calDate) => {
        setCalDate(calDate)
    }
    return (
        <>
            <CalendarComponent 
            className="calender"
            >

            </CalendarComponent>
        </>
    )
}

export default Calender
