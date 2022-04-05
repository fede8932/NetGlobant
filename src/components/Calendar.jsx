import Calendar from "react-calendar";
import { useState } from "react";
import CalendarClientFilter from "./CalendarClientFilter";
import CalendarBranchFilter from "./CalendarBranchFilter";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendarContainer">
      <CalendarClientFilter />
      <div className="app ">
        <div
          className="calendar-container text-center"
          style={{ marginLeft: "650px", marginTop: "10px" }}
        >
          <Calendar
            onChange={setDate}
            value={date}
            
          />
          {console.log(date)}
        </div>
        <p className="text-center" style={{ marginLeft: "650px",}}>
          <span className="bold">Selected Date:</span> {date.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default CalendarComponent;
