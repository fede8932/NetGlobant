import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';


const CalendarComponent = () => {
    const [date, setDate] = useState(new Date());

    return (
      <div className='app '>
        <h1 className='text-center'>React Calendar</h1>
        <div className='calendar-container' style={{marginLeft: "550px", marginTop:"80px", size: "150px"}}>
          <Calendar  onChange={setDate} value={date} />
          {console.log(date)}
        </div>
        <p className='text-center'>
          <span className='bold'>Selected Date:</span>{' '}
          {date.toDateString()}
        </p>
      </div>
    );

}


export default CalendarComponent;