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
import { useForm } from "react-hook-form";
import AssignForm from "./AssignForm";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [calendar, setCalendar] = useState([]);
  const branches = useSelector((state) => state.branches);
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();
  useEffect(() => {
    dispatch(getAllBranches());
  }, []);

  const onClicke = async (e) => {
    console.log("DATE MARI", date.getDay(date.toDateString()));
    const today =
      date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();
    console.log("TODAY", today);
    const day = today.toString();
    const coso = await dispatch(getBranchName(e.target.value));
    const id = coso.payload.id;
    console.log("ID", id);
    const calendar = await dispatch(getCalendarOffice({ id, day }));
    console.log(calendar);
    setCalendar(calendar);
    return calendar;
  };

  const click = async (e) => {
    console.log(e.target.value);
  };
  /*  const arraySecurities= calendar.payload
 const securities= arraySecurities?.map((security)=>{
   return (
     <li key={security.id}>
       <span>{security.name + " "+ security.wishEntryHour}</span>
     </li>
   )
 }) */
  const onbluer = (e) => {
    return (e.target.style.background = "green");
  };
  const options = branches?.map((branch) => {
    return (
      <option key={branch.id} id={branch.id} value={branch.name}>
        {branch.name}
      </option>
    );
  });

  return (
    <div className="app ">
      <h1 className="text-center">React Calendar</h1>
      <div
        className="calendar-container"
        style={{ marginLeft: "550px", marginTop: "80px", size: "150px" }}
        onBlur={onbluer}
        onClick={click}
      >
        <Calendar onChange={setDate} value={date} />
        {console.log(date, "ACA")}
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>

      <div className="calendarContainer">
        <AssignForm style={{ minWidth: "400px" }} />
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
                <option>Open this select menu</option>
                {options}
              </Form.Control>
            </Card.Subtitle>
            <Card.Text>{/* securities */}</Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CalendarComponent;
