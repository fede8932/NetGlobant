import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { Form, Card, Badge } from "react-bootstrap";
import { getCalendarOffice } from "../states/calendar";
import { useDispatch, useSelector } from "react-redux";
import CalendarSelectClient from "./CalendarSelectClient";
import CalendarSelectBranch from "./CalendarSelectBranch";
import AssignForm from "./AssignForm";
import workDay from "../askingCalendarOffice";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [office, setOffice] = useState([]);
  const [assing, setAssing] = useState([]);
  const [security, setSecurity] = useState([]);
  const [calendar, setCalendar] = useState([]);
  const client = useSelector((state) => state.client);
  const branch = useSelector((state) => state.branch);
  const dispatch = useDispatch();

console.log(branch)

  /* useEffect(() => {
    dispatch(getAllBranches());
  }, []); */

  console.log("BRANCH SELECIONADO", branch);

  const onClicke = async (e) => {
    setOffice(branch);
  };
  console.log("");

  const onbluer = (e) => {
    return (e.target.style.background = "green");
  };

  const changeDate = async () => {
    const id = branch.id;
    const year = date.getFullYear().toString();
    const day = date.getDate().toString();
    const month = date.getMonth().toString();
    const thisDay = year.concat("-", month, "-", day);
    const workDay = await dispatch(getCalendarOffice({ id, thisDay }));
    console.log(workDay.payload);
    setAssing(workDay.payload.onlyCalendar);
    setCalendar(workDay.payload.calendar);
    setSecurity(workDay.payload.securities);
    return workDay;
  };

  /*  workDay(calendar[0].wishEntryHour,calendar[0].wishClosingHour) */
  const securitiesAssing = assing?.map((securit) => {
    const hourEntry = securit.workDays[0].wishEntryHour;
    const hourClose = securit.workDays[0].wishClosingHour;
    return (
      <li key={securit.id}>
        <span>
          {"name:" +
            securit.name +
            " ||  CUIL:" +
            securit.CUIL +
            " ||  hora de entrada: " +
            hourEntry +
            " || hora de salida: " +
            hourClose}
        </span>
      </li>
    );
  });

  return (
    <div className="calendarContainer">
      <div>
    <CalendarSelectClient/> 
     </div>
      <div className="app ">
        <h1 className="text-center">React Calendar</h1>
        <div
          className="calendar-container"
          style={{ marginLeft: "350px", marginTop: "80px", size: "150px" }}
          onBlur={onbluer}
        >
          <Calendar onChange={setDate} value={date} />
          <button value={date} onClick={changeDate}>
            search
          </button>
          {console.log(date, "ACA")}
        </div>
        <p className="text-center">
          <span className="bold">Selected Date:</span> {date.toDateString()}
        </p>
        <div>
          <Card
            style={{
              width: "18rem",
              marginLeft: "680px",
              marginTop: "80px",
              size: "150px",
              marginBottom: "100px",
            }}
          >
            <Card.Body>
              <Card.Title>{date.toDateString()}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <Form.Control
                  type="date"
                  as="select"
                  onChange={onClicke}
                  variant="outlined"
                  aria-label="Default select example"
                >
                  <option>.</option>
                  {/* {options} */}
                </Form.Control>
              </Card.Subtitle>
              <Card.Text>{securitiesAssing}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
            style={{
              width: "20rem",
              marginLeft: "580px",
              marginTop: "10px",
              size: "250px",
              marginBottom: "200px",
            }}
          >
            <Card.Body>
              <Card.Title> Todos lo vililadores de esta sucursal</Card.Title>
              <Card.Text>
                {security.map((securitie, i) => {
                  return (
                    <li key={securitie.id}>
                      {securitie.isBusy ? (
                        <span style={{ background: "#FF553E", color: "black" }}>
                          {"name:" +
                            securitie.name +
                            " ||  CUIL:" +
                            securitie.CUIL +
                            " OCUPADO"}
                        </span>
                      ) : (
                        <span style={{ background: "#95FF75", color: "black" }}>
                          {"name:" +
                            securitie.name +
                            " ||  CUIL:" +
                            securitie.CUIL +
                            " DISPONIBLE"}
                        </span>
                      )}
                    </li>
                  );
                })}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <AssignForm style={{ minWidth: "40px" }} vigilantes={security} />
      </div>
    </div>
  );
};

export default CalendarComponent;
