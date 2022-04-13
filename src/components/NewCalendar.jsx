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
import { AiFillDelete } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import swal from "sweetalert";
import { deleteEvent } from "../states/singleEvent";

const NewCalendar = () => {
  const selectedSecuritiess = useSelector((state) => state.securitiesCalendar);
  const [actualDate, setActualDate] = useState();
  const reduxEvents = useSelector((state) => state.events);
  const branch = useSelector((state) => state.branchCalendar);
  const [event, setEvent] = useState([]);
  const navigate = useNavigate();
  const id = useParams();
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
      const obtainedBranch = await dispatch(
        getBranchById(parseInt(id.clientId))
      );
      const events = await dispatch(
        getAllEventsBranch(obtainedBranch.payload.name)
      );
      //setEvent(events.payload);
      const securities = await dispatch(
        getSelectedSecurities(obtainedBranch.payload.name)
      );
    } catch (err) {
      console.log(err);
    }
  }, [event]);

  const handleDateClick = (e) => {
    console.log(e.dateStr);
    setActualDate(e.dateStr);
    handleShow();
  };

  const onSubmit = (data) => {
    navigate(`/calendar/${id.clientId}`);
    const string = data.CUIL;
    const array = string.split(",");
    data.CUIL = array[0];
    data.completeName = array[1].concat(" ", array[2]);
    data.branchName = branch.name;
    data.date = actualDate;
    data.start = actualDate.concat("T", data.wishEntryHour, ":00");
    data.end = actualDate.concat("T", data.wishClosingHour, ":00");
    data.securityId = parseInt(array[3]);
    console.log("DATAAAAAAAAAAAAAA", data)
    dispatch(postSecurityToSchedule(data));
    dispatch(postEvent(data));
    setEvent(data);
  };

  const handleDelete = (eventToDelete) => {
    console.log("AAAAAAAAAAAAAAAAAAA", eventToDelete);
    swal({
      title: "Estas seguro que quieres borrar el evento?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((eliminar) => {
      if (eliminar) {
        //eventToDelete.securityId = eventToDelete.
        dispatch(deleteEvent(eventToDelete._def.publicId));
        setEvent(eventToDelete);
        swal("El evento fue eliminado", {
          icon: "success",
          buttons: false,
          timer: 1000,
        });
      }
    });
  };

  const handleEdit = (event) => {
    console.log("editar");
  };

  const renderEventContent = (evento) => {
    console.log("ESTO ES EVENTOOO", evento);
    if (evento.event._def.extendedProps.securityName) {
      return (
        <>
          <div className="event_container">
            <div className="image_calendar"></div>

            <b className="event_timeText">{evento.timeText}</b>
            <br />
            <i className="event_calendar">
              {evento.event._def.extendedProps.securityName}
            </i>
            <br />
            <Button
              style={{
                backgroundColor: "white",
                border: "none",
                float: "rigth",
                size: "1px",
              }}
              onClick={() => handleDelete(evento.event)}
            >
              <AiFillDelete
                variant="secondary"
                style={{ size: "1px", color: "grey", position: "relative" }}
              />
            </Button>
            <Button
              style={{
                backgroundColor: "white",
                border: "none",
                float: "rigth",
                size: "5%",
                marginLeft: "20px",
              }}
              onClick={() => handleEdit(evento.event)}
            >
              <GrEdit
                variant="secondary"
                style={{ size: "1px", color: "grey" }}
              />
            </Button>
          </div>
        </>
      );
    }
  };

  const options =
    selectedSecuritiess[0] &&
    selectedSecuritiess[0].securities?.map((security, i) => {
      return (
        <option
          key={i}
          value={[security.CUIL, security.name, security.lastName, security.id]}
        >
          {security.name} {security.lastName}
        </option>
      );
    });

  return (
    <div style={{ width: "70%", marginLeft: "20%" }}>
      <h3 style={{ color: "grey", marginLeft: "35%", marginTop: "2%" }}>
        {branch.name}
      </h3>
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
