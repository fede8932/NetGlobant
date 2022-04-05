import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import CalendarClientFilter from "./CalendarClientFilter";
import CalendarBranchFilter from "./CalendarBranchFilter";
import "react-calendar/dist/Calendar.css";
import { Form, Card } from "react-bootstrap";
import { getCalendarOffice } from "../states/calendar";
import { getBranchName } from "../states/singleBranch";
import { getAllBranches } from "../states/branches";
import { useDispatch, useSelector } from "react-redux";
import AssignForm from "./AssignForm";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [calendar, setCalendar] = useState([]);
  const branches = useSelector((state) => state.branches);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBranches());
  }, []);
  let coso = "";
  const onClicke = async (e) => {
    coso = await dispatch(getBranchName(e.target.value));
    console.log(coso);
  };
  const changeCalendar= async()=>{

  }
  const onbluer = (e) => {
    return (e.target.style.background = "green");
  };
  const options = branches?.map((branch) => {
    return (
      <option key={branch.id} id={branch.id} value={branch.name} >
        {branch.name}
      </option>
    );
  });
  const changeDate = async () => {
    const id = coso.payload.id;
    const year = date.getFullYear().toString();
    const day = date.getDate().toString();
    const month = date.getMonth().toString();
    const thisDay = year.concat("-", month, "-", day);
    const calendar = await dispatch(getCalendarOffice({ id, thisDay }));

    return calendar.payload ? setCalendar(calendar.payload) : [];
  };
  const arraySecurities = calendar.securities ? calendar.securities : [];
  const securities = arraySecurities?.map((security) => {
    return (
      <li key={security.id}>
        <span>
          {"name:" +
            security.name +
            "  CUIL:" +
            security.CUIL +
            "  hora de entrada: " +
            security.entryHour}
        </span>
      </li>
    );
  });
  console.log("ACA HAY ZANAHORIA", securities);
  console.log("ACA ESTA TODO PAPA", calendar);
  return (
    <div className="calendarContainer">
      <div className="app ">
        <h1 className="text-center">React Calendar</h1>
        <div
          className="calendar-container"
          style={{ marginLeft: "550px", marginTop: "80px", size: "150px" }}
          onBlur={onbluer}
        >
          <Calendar onChange={setDate} value={date} />
          <button value={date} onClick={changeDate}>
            {" "}
            serach
          </button>
          {console.log(date, "ACA")}
        </div>
        <p className="text-center">
          <span className="bold">Selected Date:</span> {date.toDateString()}
        </p>

        <Card
          style={{
            width: "18rem",
            marginLeft: "980px",
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
               {/*  <option>Open this select menu</option> */}
                {options}
              </Form.Control>
            </Card.Subtitle>
            <Card.Text>{securities}</Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <AssignForm style={{ minWidth: "40px" }} />
      </div>
    </div>
  );
};

export default CalendarComponent;
