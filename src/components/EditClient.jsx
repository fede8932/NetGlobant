import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editClient } from "../states/singleClient";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getClientId } from "../states/singleClient";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import useInput from "../hooks/useInput";

const EditSecurity = () => {
  const dispatch = useDispatch();
  const id = useParams();
  let client = useSelector((state) => state.client);
  const legalAddress = useInput(client.legalAddress);
  const email = useInput(client.email);
  const city = useInput(client.city);
  const province = useInput(client.province);
  const startContratDate = useInput(client.startContratDate);
  const endContratDate = useInput(client.endContratDate);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getClientId(id.id));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("ESTO ES CLIENT", client);
      const editedClient = await dispatch(
        editClient({
          ...client,
          ...data,
        })
      );
      navigate(`/clients/${editedClient.payload.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickVolver = (url) => {
    navigate(url);
  };

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right"></div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right" style={{ color: "grey" }}>
                EDITAR CLIENTE
              </h4>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row mt-2">
                <div className="col-md-6">
                  <Form.Label className="labels">
                    Nombre: {client.bussinessName}
                  </Form.Label>
                </div>
                <div className="col-md-6">
                  <Form.Label className="labels">
                    CUIT: {client.CUIT}
                  </Form.Label>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-12">
                  <Form.Label className="labels">Dirección</Form.Label>
                  <Form.Control
                    {...register("legalAddress")}
                    value={legalAddress.value}
                    onChange={legalAddress.onChange}
                    size="ms"
                    className="position-relative"
                    name="legalAddress"
                    variant="outlined"
                    required
                  />
                  <ErrorMessage
                    errors={errors}
                    name="legalAddress"
                    render={({ message }) => <p>{message}</p>}
                  />
                </div>
                <div className="col-md-12">
                  <Form.Label className="labels">Ciudad</Form.Label>
                  <Form.Control
                    {...register("city")}
                    value={city.value}
                    onChange={city.onChange}
                    size="ms"
                    className="position-relative"
                    name="city"
                    variant="outlined"
                    required
                  />
                  <ErrorMessage
                    errors={errors}
                    name="city"
                    render={({ message }) => <p>{message}</p>}
                  />
                </div>

                <div className="col-md-12">
                  <Form.Label className="labels">Provincia</Form.Label>

                  <Form.Control
                    as="select"
                    size="ms"
                    placeholder="Provincia"
                    className="position-relative"
                    name="province"
                    variant="outlined"
                    {...register("province", {
                      required: {
                        value: true,
                        message: "Necesitas este campo",
                      },
                    })}
                    //ver cómo agregar el valor de la provincia
                    value={province.value}
                    onChange={province.onChange}
                  >
                    <option>Buenos Aires</option>
                    <option>Córdoba</option>
                    <option>San Luis</option>
                    <option>Catamarca</option>
                    <option>Tierra Del Fuego</option>
                    <option>Santa Cruz</option>
                    <option>Río Negro</option>
                    <option>Neuquén</option>
                    <option>La Pampa</option>
                    <option>Santa Fé</option>
                    <option>La Rioja</option>
                    <option>Tucumán</option>
                    <option>Corrientes</option>
                    <option>Entre Ríos</option>
                    <option>Misiones</option>
                    <option>Chaco</option>
                    <option>Formosa</option>
                    <option>Jujuy</option>
                    <option>San Juan</option>
                    <option>Salta</option>
                    <option>Mendoza</option>
                    <option>Santiago del Estero</option>
                    <option>Chubut</option>
                  </Form.Control>

                  <ErrorMessage
                    errors={errors}
                    name="province"
                    render={({ message }) => <p>{message}</p>}
                  />
                </div>

                <div className="col-md-12">
                  <Form.Label className="labels">Email</Form.Label>
                  <Form.Control
                    size="ms"
                    placeholder={client.email}
                    className="position-relative"
                    name="email"
                    variant="outlined"
                    {...register("email", {
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "El formato no es correcto",
                      },
                    })}
                    value={email.value}
                    onChange={email.onChange}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => <p>{message}</p>}
                  />
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <Form.Label className="labels">
                      Inicio de contrato:
                      <br /> {client.startContratDate}
                    </Form.Label>
                    <Form.Control
                      type="date"
                      size="ms"
                      className="position-relative"
                      name="startContratDate"
                      variant="outlined"
                      {...register("startContratDate")}
                      // value={startContratDate.value}
                      // onChange={startContratDate.onChange}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="startContratDate"
                      render={({ message }) => <p>{message}</p>}
                    />
                  </div>

                  <div className="col-md-6">
                    <Form.Label className="labels">
                      Fin de contrato:
                      <br /> {client.endContratDate}
                    </Form.Label>
                    <Form.Control
                      type="date"
                      size="ms"
                      className="position-relative"
                      name="endContratDate"
                      variant="outlined"
                      {...register("endContratDate")}
                      // value={endContratDate.value}
                      // onChange={endContratDate.onChange}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="endContratDate"
                      render={({ message }) => <p>{message}</p>}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button
                  onClick={handleSubmit(onSubmit)}
                  variant="warning"
                  className="btn btn-primary profile-button"
                  type="submit"
                >
                  GUARDAR CAMBIOS
                </Button>
                <Button
                  variant="warning"
                  onClick={() => handleClickVolver("/clients")}
                  className="btn btn-primary profile-button m-5"
                  type="button"
                >
                  VOLVER
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSecurity;
