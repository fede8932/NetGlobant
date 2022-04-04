import React from "react";
import { Button, Form, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { createSecurity } from "../states/singleSecurity";

const SecurityFormNuevo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const security = useSelector((state) => state.security);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("ESTO ES DATA EN ONSUBMIT",data)
    dispatch(createSecurity(data));
    navigate(`/`);
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
                ALTA DE VIGILADORES
              </h4>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="row mt-2">
                <div className="col-md-6">
                  <Form.Label className="labels">Nombre</Form.Label>
                  <Form.Control
                    size="ms"
                    placeholder="Nombre"
                    className="position-relative"
                    name="name"
                    variant="outlined"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Necesitas este campo",
                      },
                    })}
                  />
                  <ErrorMessage
                    errors={require}
                    name="name"
                    render={({ message }) => <p>{message}</p>}
                  />
                </div>
                <div className="col-md-6">
                  <Form.Label className="labels">Apellido</Form.Label>
                  <Form.Control
                    size="ms"
                    placeholder="Apellido"
                    className="position-relative"
                    name="lastName"
                    variant="outlined"
                    {...register("lastName", {
                      required: {
                        value: true,
                        message: "Necesitas este campo",
                      },
                    
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="lastName"
                    render={({ message }) => <p>{message}</p>}
                  />
                </div>
              </div>

              <div className="col-md-12">
                  <Form.Label className="labels">CUIL</Form.Label>
                  <Form.Control
                    size="ms"
                    placeholder="Solo numeros / 11 caracteres"
                    className="position-relative"
                    name="CUIL"
                    variant="outlined"
                    {...register("CUIL", {
                      required: {
                        value: true,
                        message: "Necesitas este campo",
                      },
                      minLength: {
                        value: 11,
                        message:
                          "El CUIL debe tener 11 caracteres",
                      },
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="CUIL"
                    render={({ message }) => <p>{message}</p>}
                  />
                </div>
              

              <div className="row mt-3">


                <div className="col-md-12">
                  <Form.Label className="labels">Dirección</Form.Label>
                  <Form.Control
                    size="ms"
                    placeholder="Dirección"
                    className="position-relative"
                    name="address"
                    variant="outlined"
                    {...register("address", {
                      required: {
                        value: true,
                        message: "Necesitas este campo",
                      },
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="address"
                    render={({ message }) => <p>{message}</p>}
                  />
                </div>
                

                <div className="col-md-12">
                  <Form.Label className="labels">Email</Form.Label>
                  <Form.Control
                    size="ms"
                    placeholder="ejemplo@gmail.com"
                    className="position-relative"
                    name="email"
                    variant="outlined"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Necesitas este campo",
                      },
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
                      Inicio de contrato
                    </Form.Label>
                    <Form.Control
                      type="date"
                      size="ms"
                      className="position-relative"
                      name="startContratDate"
                      variant="outlined"
                      {...register("startContratDate", {
                        required: {
                          value: true,
                          message: "Necesitas este campo",
                        },
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="startContratDate"
                      render={({ message }) => <p>{message}</p>}
                    />
                  </div>

                  <div className="col-md-6">
                    <Form.Label className="labels">Fin de contrato</Form.Label>
                    <Form.Control
                      type="date"
                      size="ms"
                      placeholder="MM/DD/AAAA"
                      className="position-relative"
                      name="endContratDate"
                      variant="outlined"
                      {...register("endContratDate", {
                        required: {
                          value: true,
                          message: "Necesitas este campo",
                        },
                      })}
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
                  onSubmit={handleSubmit(onSubmit)}
                  type="submit"
                  variant="warning"
                  className="btn btn-primary profile-button"
                >
                  AGREGRAR
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
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityFormNuevo;
