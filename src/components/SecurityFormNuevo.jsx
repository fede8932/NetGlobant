import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { /* useSelector, */ useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { createSecurity } from "../states/singleSecurity";



const SecurityFormNuevo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const createdSecurity = await dispatch(createSecurity(data));
      navigate(`/search/securities/${createdSecurity.payload.id}`);
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
                      message: "El CUIL debe tener 11 caracteres",
                    },
                    maxLength: {
                      value: 11,
                      message: "El CUIL debe tener 11 caracteres",
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

                <div className="row mt-2">
                  <div className="col-md-6">
                    <Form.Label className="labels">Longitud</Form.Label>
                    <Form.Control
                      size="ms"
                      placeholder="Coordenada X"
                      className="position-relative"
                      name="addressX"
                      variant="outlined"
                      {...register("addressX", {
                        required: {
                          value: true,
                          message: "Necesitas este campo",
                        },
                      })}
                    ></Form.Control>

                    <ErrorMessage
                      errors={errors}
                      name="addressX"
                      render={({ message }) => <p>{message}</p>}
                    />
                  </div>

                  <div className="col-md-6">
                    <Form.Label className="labels">Latitud</Form.Label>
                    <Form.Control
                      size="ms"
                      placeholder="Coordenada Y"
                      className="position-relative"
                      name="addressY"
                      variant="outlined"
                      {...register("addressY", {
                        required: {
                          value: true,
                          message: "Necesitas este campo",
                        },
                      })}
                    ></Form.Control>
                    <ErrorMessage
                      errors={errors}
                      name="addressY"
                      render={({ message }) => <p>{message}</p>}
                    />
                  </div>
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

                <div className="col-md-12">
                  <Form.Label className="labels">Provincia</Form.Label>

                  <Form.Control
                    as="select"
                    size="ms"
                    placeholder="Provincia"
                    className="position-relative"
                    name="email"
                    variant="outlined"
                    {...register("provincie", {
                      required: {
                        value: true,
                        message: "Necesitas este campo",
                      },
                    })}
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
                    name="provincie"
                    render={({ message }) => <p>{message}</p>}
                  />
                </div>

                <div className="col-md-12">
                  <Form.Label className="labels">Contraseña</Form.Label>
                  <Form.Control
                    size="ms"
                    placeholder="Contraseña"
                    className="position-relative"
                    name="password"
                    variant="outlined"
                    type="password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Necesitas este campo",
                      },
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="password"
                    render={({ message }) => <p>{message}</p>}
                  />
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
                  onClick={() => handleClickVolver("/search/securities")}
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
