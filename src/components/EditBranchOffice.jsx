import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editClient } from "../states/singleClient";
import { useInput } from "../hooks/useInput";
import swal from "sweetalert";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { editBranchId, getBranchId } from "../states/singleBranch";

const EditBranchOffice = () => {
  const dispatch = useDispatch();
  const id = useParams();
  const branch = useSelector((state) => state.branch);
  const navigate = useNavigate();

  const name = useInput();
  const city = useInput();
  const address = useInput();
  const openHour = useInput();
  const closeHour = useInput();
  const provincie = useInput();
  const owner = useInput();

  useEffect(() => {
    dispatch(getBranchId(id.id));
  }, []);

  const handleClick = () => {
    dispatch(
      editBranchId({
        id: id.id,
        name: name.value,
        city: city.value,
        address: address.value,
        openHour: openHour.value,
        closeHour: closeHour.value,
        provincie: provincie.value,
        owner: owner.value,
      })
    );
    swal({
      title: "La sucursal fue editada",
      text: ".",
      icon: "success",
      button: "Aceptar",
    });
    
    navigate(`/branch/${id.id}`);
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
            <div className="row mt-2">
              <div className="col-md-6">
                <Form.Label className="labels">Nombre</Form.Label>
                <Form.Control
                  size="ms"
                  placeholder={branch.name}
                  className="position-relative"
                  name="bussinessName"
                  variant="outlined"
                  value={name.value}
                  onChange={name.onChange}
                />
              </div>
              <div className="col-md-6">
                <Form.Label className="labels">Ciudad</Form.Label>
                <Form.Control
                  size="ms"
                  placeholder={branch.city}
                  className="position-relative"
                  name="CUIT"
                  variant="outlined"
                  value={city.value}
                  onChange={city.onChange}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-12">
                <Form.Label className="labels">Dirección</Form.Label>
                <Form.Control
                  size="ms"
                  placeholder={branch.address}
                  className="position-relative"
                  name="legalAddress"
                  variant="outlined"
                  value={address.value}
                  onChange={address.onChange}
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
                  value={provincie.value}
                  onChange={provincie.onChange}
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
              </div>

              <div className="col-md-12">
                <Form.Label className="labels">Cliente</Form.Label>
                <Form.Control
                  size="ms"
                  placeholder={branch.owner}
                  className="position-relative"
                  name="email"
                  variant="outlined"
                  value={owner.value}
                  onChange={owner.onChange}
                />
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <Form.Label className="labels">
                    Horario de apertura
                  </Form.Label>
                  <Form.Control
                    size="ms"
                    placeholder={branch.openHour}
                    className="position-relative"
                    name="startContratDate"
                    variant="outlined"
                    value={openHour.value}
                    onChange={openHour.onChange}
                  />
                </div>

                <div className="col-md-6">
                  <Form.Label className="labels">Horario de cierre</Form.Label>
                  <Form.Control
                    size="ms"
                    placeholder={branch.closeHour}
                    className="position-relative"
                    name="endContratDate"
                    variant="outlined"
                    value={closeHour.value}
                    onChange={closeHour.onChange}
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <Button
                variant="warning"
                onClick={handleClick}
                className="btn btn-primary profile-button"
                type="button"
              >
                GUARDAR CAMBIOS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBranchOffice;
