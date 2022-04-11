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

const NewCalendar = () => {
  const selectedSecuritiess = useSelector((state) => state.securitiesCalendar);
  const [actualDate, setActualDate] = useState();

  const [events, setEvents] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSelectedSecurities("Fravega Gualeguaychu"));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDateClick = (e) => {
    console.log(e.dateStr);
    setActualDate(e.dateStr);
    handleShow();
  };

  const onSubmit = (data) => {
    data.branchName = "Fravega Gualeguaychu";
    data.date = actualDate;
    console.log(data);
    setEvents(data);
    dispatch(postSecurityToSchedule(data));
    console.log("agregado", data);
  };

  console.log("events", events);

  const options =
    selectedSecuritiess[0] &&
    selectedSecuritiess[0].securities?.map((security, i) => {
      return (
        <option key={i} value={security.CUIL}>
          {security.name} {security.lastName}
        </option>
      );
    });

  return (
    <div style={{ width: "80%", marginLeft: "10%" }}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        dateClick={handleDateClick}
        // headerToolbar={
        //   day
        //     ? { rigth: "allDay" }
        //     : { rigth: dayView ? "allDay" : "prev next" }
        // }
        footerToolbar={{ center: "dayGridMonth tomiGridDay" }}
        initialView="dayGridMonth"
    
        buttonText={{ month: "mes", day: "dia" }}
        businessHours={{
          daysOfWeek: [1, 2, 3, 4, 5, 6, 7],
          startTime: "00.00",
          endTime: "23:59",
        }}
        events={events}
        eventOverlap={false}
        selectable={true}
        editable={true}
        navLinks={true}
        // eventAdd={onSubmit}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar a Calendario </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              position: "relative",
              width: "300px",
              left: "0px",
              top: "20px",
            }}
          >
            <Form.Label className="labels">
              <strong>Fecha: </strong> {actualDate}
            </Form.Label>
            <br />
            <div className="col-md-12">
              <Form.Label className="labels">
                Seleccione un vigilador
              </Form.Label>
              <Form.Control
                style={{ width: "200px" }}
                as="select"
                size="ms"
                className="position-relative"
                name="CUIL"
                variant="outlined"
                {...register("CUIL", {
                  required: {
                    value: true,
                    message: "Necesitas este campo",
                  },
                })}
              >
                <option>Seleccione un vigilador</option>
                {options}
              </Form.Control>
            </div>

            <div className="row mt-2">
              <div className="col-md-6">
                <Form.Label className="labels">Ingreso</Form.Label>
                <Form.Control
                  name="wishEntryHour"
                  size="ms"
                  className="position-relative"
                  variant="outlined"
                  type="time"
                  {...register("wishEntryHour", {
                    required: {
                      value: true,
                      message: "Necesitas este campo",
                    },
                  })}
                />
              </div>
              <div className="col-md-6">
                <Form.Label className="labels">Egreso</Form.Label>
                <Form.Control
                  name="wishClosingHour"
                  size="ms"
                  className="position-relative"
                  variant="outlined"
                  type="time"
                  {...register("wishClosingHour", {
                    required: {
                      value: true,
                      message: "Necesitas este campo",
                    },
                  })}
                />
              </div>
            </div>
          </Form>
        </Modal.Body>
        <br />
        <br />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="warning" onClick={handleSubmit(onSubmit)}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NewCalendar;
