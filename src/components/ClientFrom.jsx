import React, { useEffect, useState } from "react";
import { useInput } from "../hooks/useInput";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { postClient } from "../states/singleClient";

const ClientForm = () => {
  const bussinessName = useInput();
  const CUIT = useInput();
  const email = useInput();
  const legalAddress = useInput();
  const startContratDate = useInput();
  const endContratDate = useInput();
  const navigate = useNavigate();
  const client = useSelector((state) => state.client);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      postClient({
        bussinessName: bussinessName.value,
        CUIT: CUIT.value,
        email: email.value,
        legalAddress: legalAddress.value,
        startContratDate: startContratDate.value,
        endContratDate: endContratDate.value,
      })
    );

    swal({
      title: "Cliente agregado",
      text: ".",
      icon: "success",
      button: "Aceptar",
    });

    navigate(`/clients/${client.id}`);
  };

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right"></div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right" style={{ color: "grey" }}>
                ALTA DE CLIENTES
              </h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <Form.Label className="labels">Nombre</Form.Label>
                <Form.Control
                  size="ms"
                  placeholder="Nombre"
                  className="position-relative"
                  name="bussinessName"
                  variant="outlined"
                  value={bussinessName.value}
                  onChange={bussinessName.onChange}
                />
              </div>
              <div className="col-md-6">
                <Form.Label className="labels">CUIT</Form.Label>
                <Form.Control
                  size="ms"
                  placeholder="CUIT"
                  className="position-relative"
                  name="CUIT"
                  variant="outlined"
                  value={CUIT.value}
                  onChange={CUIT.onChange}
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
                  name="legalAddress"
                  variant="outlined"
                  value={legalAddress.value}
                  onChange={legalAddress.onChange}
                />
              </div>

              <div className="col-md-12">
                <Form.Label className="labels">Email</Form.Label>
                <Form.Control
                  size="ms"
                  placeholder="Email"
                  className="position-relative"
                  name="email"
                  variant="outlined"
                  value={email.value}
                  onChange={email.onChange}
                />
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <Form.Label className="labels">Inicio de contrato</Form.Label>
                  <Form.Control
                    type="date"
                    size="ms"
                    placeholder="MM/DD/AAAA"
                    className="position-relative"
                    name="startContratDate"
                    variant="outlined"
                    value={startContratDate.value}
                    onChange={startContratDate.onChange}
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
                    value={endContratDate.value}
                    onChange={endContratDate.onChange}
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
                AGREGRAR
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientForm;
