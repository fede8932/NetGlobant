import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import {Modal, Button} from "react-bootstrap"

const NewCalendar = () => {
  const handleDateClick = (e) => {
    console.log(e.dateStr);
  };
  return (
    <div style={{ width: "80%", marginLeft: "10%" }}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        events={[{ title: "hola", date: "2022-04-10" }]}
      />
    </div>
  );
};

export default NewCalendar;
