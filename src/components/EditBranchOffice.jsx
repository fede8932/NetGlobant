import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { editBranchId, getBranchId } from "../states/singleBranch";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const EditBranchOffice = () => {
  const dispatch = useDispatch();
  const id = useParams();
  const branch = useSelector((state) => state.branch);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBranchId(id.id));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(
      editBranchId({
        id: id.id,
        data,
      })
    );
  
    navigate(`/branch/${id.id}`);
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
              EDITAR SUCURSAL
            </h4>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mt-2">
              <div className="col-md-6">
                <Form.Label className="labels">Nombre</Form.Label>
                <Form.Control
                  size="ms"
                  placeholder={branch.name}
                  className="position-relative"
                  name="name"
                  variant="outlined"
                  {...register("name", 
                  )}
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
                <Form.Label className="labels">Dirección: {branch.address}</Form.Label>

              </div>

              <div className="col-md-12">
                <Form.Label className="labels">Ciudad: {branch.city}</Form.Label>
            
              </div>

             

              <div className="row mt-2">
                  <div className="col-md-6">
                    <Form.Label className="labels">
                      Hoario de apertura: {branch.openHour} HS
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
                      Horario de cierre: {branch.closeHour} HS
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
          </Form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default EditBranchOffice;
