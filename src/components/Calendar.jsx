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
  const [office, setOffice] = useState([]);
  const [assing, setAssing] = useState([]);
  const [security, setSecurity] = useState([]);
  const [calendar, setCalendar] = useState([]);
  const branches = useSelector((state) => state.branches);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBranches());
  }, []);

  const onClicke = async (e) => {
    const officeObject= await dispatch(getBranchName(e.target.value));
   /*  console.log("COSO", officeObject); */
    setOffice(officeObject.payload)
  };



 /*  const changeCalendar= async()=>{
   
} */
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
    const id = office.id;
    const year = date.getFullYear().toString();
    const day = date.getDate().toString();
    const month = date.getMonth().toString();
    const thisDay = year.concat("-", month, "-", day);
    const workDay = await dispatch(getCalendarOffice({ id, thisDay }));
   setAssing(workDay.payload.onlyCalendar) 
   setCalendar(workDay.payload.calendar)
   setSecurity(workDay.payload.securities)
   return workDay
  }; 
  
  const securitiesAssing= assing?.map((securit) => {
   const hourEntry=securit.workDays[0].wishEntryHour
   const hourClose=securit.workDays[0].wishClosingHour
    return (
      <li key={securit.id}>
        <span>
          {"name:" +
            securit.name +
            " ||  CUIL:" +
            securit.CUIL +
            " ||  hora de entrada: " +
            hourEntry
            + " || hora de salida: "+ hourClose}
        </span>
      </li>
    );
  }) 

 
 

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
          </button>{console.log(date, "ACA")}
          
          
          
        </div>
        <p className="text-center">
          <span className="bold">Selected Date:</span> {date.toDateString()}
        </p>
       
    <div>
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
              > <option>.</option>
                {options}
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
            <Card.Text>{security.map((securitie,i)=>{
   return(
    <li key={securitie.id}>
      {securitie.status? <span style={{background : "#FF553E", color: "black"}}>
      {"name:" +
        securitie.name +
        " ||  CUIL:" +
        securitie.CUIL + " OCUPADO" }
    </span>:<span style={{background : "#95FF75", color: "black"}}>
      {"name:" +
        securitie.name +
        " ||  CUIL:" +
        securitie.CUIL + " DISPONIBLE"}
    </span>  }
   
  </li> )
  }
)   }</Card.Text>
          </Card.Body>
        </Card> 
        </div>
        <AssignForm style={{ minWidth: "40px" }} vigilantes={security} />
         
        
      </div> 
    </div>
  );
};

export default CalendarComponent;
