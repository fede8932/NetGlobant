import ClientSelect from "./ClientSelect";
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedSecurities } from "../states/securitiesCalendar";
import { postSecurityToSchedule } from "../states/securityCalendar";
import { getAllEventsBranch } from "../states/events";
import { postEvent } from "../states/singleEvent";
import { useNavigate, useParams } from "react-router-dom";
import { getBranchById } from "../states/singleCalendarBranch";

const NewCalendar = () => {
  const selectedSecuritiess = useSelector((state) => state.securitiesCalendar);
  const [actualDate, setActualDate] = useState();
  const reduxEvents = useSelector((state) => state.events);
  const branch = useSelector((state) => state.branchCalendar);
  const navigate = useNavigate();
  const id = useParams();

  console.log("id params => ", id);

  // const events = [
  //   {
  //     name: "Dolores",
  //     start: "2022-04-11T10:00:00",
  //     end: "2022-04-11T23:00:00",
  //   },
  //   {
  //     name: "Joaquin",
  //     start: "2022-04-12T15:00:00",
  //     end: "2022-04-12T23:00:00",
  //   },
  //   {
  //     name: "Maria",
  //     start: "2022-04-10T21:00:00",
  //     end: "2022-04-10T23:00:00",
  //   },
  //   {
  //     name: "Belen",
  //     start: "2022-04-09T12:00:00",
  //     end: "2022-04-09T23:00:00",
  //   },
  // ];

  console.log("BRANCH SELECCIONADA CALENDARIO ==>>", branch);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(async () => {
    try {
      const obtainedBranch = await dispatch(getBranchById(parseInt(id.clientId)));
      console.log("obtainedBranch => ", obtainedBranch)
      const events = await dispatch(getAllEventsBranch(obtainedBranch.payload.name));
      console.log("events",events)
      const securities = await dispatch(getSelectedSecurities(obtainedBranch.payload.name));
    } catch (err) {
      console.log(err);
    }
  }, []);



  const handleDateClick = (e) => {
    console.log(e.dateStr);
    setActualDate(e.dateStr);
    handleShow();
  };

  const onSubmit = (data) => {
    navigate("/calendar");
    data.branchName = branch.name;
    data.date = actualDate;
    data.start = actualDate.concat("T", data.wishEntryHour, ":00");
    data.end = actualDate.concat("T", data.wishClosingHour, ":00");
    dispatch(postEvent(data));
    dispatch(postSecurityToSchedule(data));
  };

  const renderEventContent = (evento) => {
    console.log("evento", evento);

    if (evento.event._def.extendedProps.securityName) {
      return (
        <>
          <div className="event_container">
            <div className="image_calendar"></div>
            <i className="event_calendar">{evento.event._def.extendedProps.securityName}</i>
            <b className="event_timeText">{evento.timeText}</b>
            {/* <b className="event_timeText">{evento.end}</b> */}
          </div>
        </>
      );
    }
  };

  // const options =
  //   selectedSecuritiess[0] &&
  //   selectedSecuritiess[0].securities?.map((security, i) => {
  //     return (
  //       <option key={i} value={security.CUIL}>
  //         {security.name} {security.lastName}
  //       </option>
  //     );
  //   });

  return (
    <div style={{ width: "70%", marginLeft: "20%" }}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        dateClick={handleDateClick}
        footerToolbar={{ center: "dayGridMonth timeGridDay" }}
        initialView="dayGridMonth"
        buttonText={{ month: "mes", day: "dia" }}
        events={reduxEvents}
        eventOverlap={false}
        selectable={true}
        editable={true}
        navLinks={true}
        eventContent={renderEventContent}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar a Calendario </Modal.Title>
        </Modal.Header>

  //       <Modal.Body>
  //         <Form
  //           onSubmit={handleSubmit(onSubmit)}
  //           style={{
  //             position: "relative",
  //             width: "300px",
  //             left: "0px",
  //             top: "20px",
  //           }}
  //         >
  //           <Form.Label className="labels">
  //             <strong>Fecha: </strong> {actualDate}
  //           </Form.Label>
  //           <br />
  //           <div className="col-md-12">
  //             <Form.Label className="labels">
  //               Seleccione un vigilador
  //             </Form.Label>
  //             <Form.Control
  //               style={{ width: "200px" }}
  //               as="select"
  //               size="ms"
  //               className="position-relative"
  //               name="CUIL"
  //               variant="outlined"
  //               {...register("CUIL", {
  //                 required: {
  //                   value: true,
  //                   message: "Necesitas este campo",
  //                 },
  //               })}
  //             >
  //               <option>Seleccione un vigilador</option>
  //               {options}
  //             </Form.Control>
  //           </div>

  //           <div className="row mt-2">
  //             <div className="col-md-6">
  //               <Form.Label className="labels">Ingreso</Form.Label>
  //               <Form.Control
  //                 name="wishEntryHour"
  //                 size="ms"
  //                 className="position-relative"
  //                 variant="outlined"
  //                 type="time"
  //                 {...register("wishEntryHour", {
  //                   required: {
  //                     value: true,
  //                     message: "Necesitas este campo",
  //                   },
  //                 })}
  //               />
  //             </div>
  //             <div className="col-md-6">
  //               <Form.Label className="labels">Egreso</Form.Label>
  //               <Form.Control
  //                 name="wishClosingHour"
  //                 size="ms"
  //                 className="position-relative"
  //                 variant="outlined"
  //                 type="time"
  //                 {...register("wishClosingHour", {
  //                   required: {
  //                     value: true,
  //                     message: "Necesitas este campo",
  //                   },
  //                 })}
  //               />
  //             </div>
  //           </div>
  //         </Form>
  //       </Modal.Body>
  //       <br />
  //       <br />

  //       <Modal.Footer>
  //         <Button variant="secondary" onClick={handleClose}>
  //           Cerrar
  //         </Button>
  //         <Button variant="warning" onClick={handleSubmit(onSubmit)}>
  //           Agregar
  //         </Button>
  //       </Modal.Footer>
  //     </Modal>
  //   </div>
  // );
};

export default NewCalendar;
