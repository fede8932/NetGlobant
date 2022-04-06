import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { getCloseSecurities } from "../states/securities";
import { useDispatch, useSelector } from "react-redux";

const AssignForm = ({ vigilantes }) => {
  /* const [guardias , setGuardias] = React.useState([
        {name : "Martin Cristo" , CUIL : 23354896579 , direccion : "Av Sarmiento 3545"},
        {name : "Marcelo Castro" , CUIL : 21354896575 , direccion : "Av Belgrano 3545"},
        {name : "Daniela Dominguez" , CUIL : 25354896574 , direccion : "Av San Martin 3545"},
        {name : "Mariana Lopez" , CUIL : 29354896577 , direccion : "Av Colon 3545"}]) // hay que traerlo desde el back 
   */ const [guardia, setGuardia] = React.useState(vigilantes[0]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const handleClick = async (data) => {
    console.log("DATA DE ASING", data);
    try {
      guardia ? (
        await axios({
          method: "POST",
          url: "/api/admin/add/Calendar/security",
          data: {
            name: guardia.name,
            wishEntryHour: data.ingreso,
            wishClosingHour: data.egreso,
          },
        })
      ) : (
        <p>no hay vigiladores </p>
      );
      swal({
        title: "Vigilador asignado",
        text: ".",
        icon: "success",
        button: "Aceptar",
      });
    } catch (err) {
      swal({
        title: err,
        text: ".",
        icon: "success",
        button: "Aceptar",
      });
    }
  };
  return (
    <div className="assignContainer">
      <h4 className="text-center" style={{ color: "grey" }}>
        ASIGNACIÓN
      </h4>
      <form onSubmit={handleSubmit(handleClick)}>
        <div className="row mt-3">
          <div className="col-md-12">
            <label className="labels">Seleccioná el guardia de seguridad</label>
            <select
              onChange={(e) => {
                setGuardia(vigilantes[e.target.value]);
              }}
              className="form-select"
              id="inputGroupSelect01"
            >
              {vigilantes
                ? vigilantes.map((guardia, i) => (
                    <option key={i} value={i}>
                      {guardia.name}
                    </option>
                  ))
                : "."}
            </select>
          </div>
        </div>
        <div>
          <Form.Label className="labels">CUIL</Form.Label>
          <Form.Control
            size="ms"
            className="position-relative"
            variant="outlined"
            disabled="true"
            value={guardia ? guardia.CUIL : ""}
          />
        </div>
        <div>
          <Form.Label className="labels">Dirección</Form.Label>
          <Form.Control
            size="ms"
            className="position-relative"
            variant="outlined"
            disabled="true"
            value={guardia ? guardia.direccion : ""}
          />
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <Form.Label className="labels">Ingreso</Form.Label>
            <Form.Control
              name="ingreso"
              size="ms"
              placeholder="Nombre"
              className="position-relative"
              variant="outlined"
              type="time"
              {...register("ingreso", {
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
              name="egreso"
              size="ms"
              placeholder="Apellido"
              className="position-relative"
              variant="outlined"
              type="time"
              {...register("egreso", {
                required: {
                  value: true,
                  message: "Necesitas este campo",
                },
              })}
            />
          </div>
        </div>
        <div id="assignBtn" className="text-center">
          <Button
            type="submit"
            variant="warning"
            className="btn btn-primary profile-button"
          >
            ASIGNAR
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AssignForm;
