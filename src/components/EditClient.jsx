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

const EditSecurity = () => {
  const dispatch = useDispatch();
  const id = useParams();
  const client = useSelector((state) => state.client);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getClientId(id.id));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(
      editClient({
        id: id.id,
        data,
      })
    );

    navigate(`/clients/${id.id}`);
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
                    size="ms"
                    placeholder={client.legalAddress}
                    className="position-relative"
                    name="legalAddress"
                    variant="outlined"
                    {...register("address")}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="legalAddress"
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
