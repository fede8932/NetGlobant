import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { getCloseSecurities } from "../states/securities";
import { useDispatch, useSelector } from "react-redux";

const AssignForm = () => {
  const dispatch = useDispatch();
  const closeSecurities = useSelector((state) => state.securities);
  const branch = useSelector((state) => state.branch);

  useEffect(() => {
    dispatch(getCloseSecurities(branch));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const options = closeSecurities?.map((guardia, i) => {
    return (
      <option key={i} value={i}>
        {guardia.name} {guardia.lastName} --- {guardia.address} 
      </option>
    );
  });

  const handleClick = async (data) => {
    try {
      await axios({
        method: "POST",
        url: "/api/admin/add/calendar/office",
        data: {
          // name: guardia.name,
          wishEntryHour: data.ingreso,
          wishClosingHour: data.egreso,
        },
      });
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
    <form onSubmit={handleSubmit(handleClick)}>
      <div className="row mt-3">
        <div className="col-md-12">
          <Form.Label className="labels">Seleccione un vigilador</Form.Label>
          <Form.Control
          style={{width:"200px"}}
            as="select"
            size="ms"
            className="position-relative"
            name="security"
            variant="outlined"
            {...register("security", {
              required: {
                value: true,
                message: "Necesitas este campo",
              },
            })}
          >
            {options}
          </Form.Control>
          {/* <label className="labels">Seleccioná el guardia de seguridad</label>
          <select
            onChange={(e) => {
              setGuardia(closeSecurities[e.target.value]);
            }}
            className="form-select"
            id="inputGroupSelect01"
          >
            {closeSecurities?.map((guardia, i) => (
              <option key={i} value={i}>
                {guardia.name} {guardia.address}
              </option>
            ))}
          </select> */}
        </div>
      </div>
      {/* <div>
        <Form.Label className="labels">CUIL</Form.Label>
        <Form.Control
          size="ms"
          className="position-relative"
          variant="outlined"
          disabled="true"
          // value={guardia.CUIL}
        />
      </div>
      <div>
        <Form.Label className="labels">Dirección</Form.Label>
        <Form.Control
          size="ms"
          className="position-relative"
          variant="outlined"
          disabled="true"
          // value={guardia.direccion}
        />
      </div> */}
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

      <Button type="submit" variant="secondary" style={{ marginTop: "5px" }}>
        Asignar
      </Button>
    </form>
  );
};

export default AssignForm;
