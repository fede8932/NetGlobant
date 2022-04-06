import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postBranch } from "../states/singleBranch";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { getAllClients } from "../states/Clients";

const BranchOfficeForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients);

  useEffect(() => {
    dispatch(getAllClients());
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const createdBranch = await dispatch(postBranch(data));
      navigate(`/branch/${createdBranch.payload.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickVolver = (url) => {
    navigate(url);
  };

  const options = clients?.map((client) => {
    return (
      <option key={client.id} value={client.bussinessName}>
        {client.bussinessName}
      </option>
    );
  });

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right"></div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right" style={{ color: "grey" }}>
                ALTA DE SUCURSAL
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
                  <Form.Label className="labels">Ciudad</Form.Label>
                  <Form.Control
                    size="ms"
                    placeholder="Ciudad"
                    className="position-relative"
                    name="city"
                    variant="outlined"
                    {...register("city", {
                      required: {
                        value: true,
                        message: "Necesitas este campo",
                      },
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="city"
                    render={({ message }) => <p>{message}</p>}
                  />
                </div>

                <div className="col-md-12">
                  <Form.Label className="labels">Cliente</Form.Label>

                  <Form.Control
                    as="select"
                    size="ms"
                    placeholder="Cliente"
                    className="position-relative"
                    name="owner"
                    variant="outlined"
                    {...register("owner", {
                      required: {
                        value: true,
                        message: "Necesitas este campo",
                      },
                    })}
                  >
                    {options}
                  </Form.Control>

                  <ErrorMessage
                    errors={errors}
                    name="owner"
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

                <div className="row mt-2">
                  <div className="col-md-6">
                    <Form.Label className="labels">
                      Hoario de apertura
                    </Form.Label>
                    <Form.Control
                      as="select"
                      size="ms"
                      placeholder="Horario de apertura"
                      className="position-relative"
                      name="Horario de apertura"
                      variant="outlined"
                      {...register("openHour", {
                        required: {
                          value: true,
                          message: "Necesitas este campo",
                        },
                      })}
                    >
                      <option>00</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                      <option>06</option>
                      <option>07</option>
                      <option>08</option>
                      <option>09</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                      <option>13</option>
                      <option>14</option>
                      <option>15</option>
                      <option>16</option>
                      <option>17</option>
                      <option>18</option>
                      <option>19</option>
                      <option>20</option>
                      <option>21</option>
                      <option>22</option>
                      <option>23</option>
                    </Form.Control>

                    <ErrorMessage
                      errors={errors}
                      name="openHour"
                      render={({ message }) => <p>{message}</p>}
                    />
                  </div>

                  <div className="col-md-6">
                    <Form.Label className="labels">
                      Horario de cierre
                    </Form.Label>
                    <Form.Control
                      as="select"
                      size="ms"
                      placeholder="Horario de cierre"
                      className="position-relative"
                      name="Horario de cierre"
                      variant="outlined"
                      {...register("closeHour", {
                        required: {
                          value: true,
                          message: "Necesitas este campo",
                        },
                      })}
                    >
                      <option>00</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                      <option>06</option>
                      <option>07</option>
                      <option>08</option>
                      <option>09</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                      <option>13</option>
                      <option>14</option>
                      <option>15</option>
                      <option>16</option>
                      <option>17</option>
                      <option>18</option>
                      <option>19</option>
                      <option>20</option>
                      <option>21</option>
                      <option>22</option>
                      <option>23</option>
                    </Form.Control>
                    <ErrorMessage
                      errors={errors}
                      name="closeHour"
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

export default BranchOfficeForm;
