import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editClient } from "../states/singleClient";
import { useInput } from "../hooks/useInput";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getClientId } from "../states/singleClient";
import {useInputHook}  from "../hooks/useInputHook";

const EditSecurity = () => {
  const dispatch = useDispatch();
  const id = useParams();
  const client = useSelector((state) => state.client);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getClientId(id.id));
  }, []);

  const bussinessName = useInputHook(client.bussinessName);
  const CUIT = useInputHook(client.CUIT);
  const email = useInput(client.Email);
  const legalAddress = useInput(client.legalAddress);
  const startContratDate = useInput();
  const endContratDate = useInput();

  const handleClick = () => {
    dispatch(
      editClient({
        id: id.id,
        bussinessName: bussinessName.value,
        CUIT: CUIT.value,
        legalAddress: legalAddress.value,
        email: email.value,
        startContratDate: startContratDate.value,
        endContratDate: endContratDate.value,
      })
    );

    navigate(`/clients/${id.id}`);
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
            <form onSubmit={handleClick}>
              <div className="row mt-2">
                <div className="col-md-6">
                  <Form.Label className="labels">Nombre</Form.Label>

                  <Form.Control
                    size="ms"
                    className="position-relative"
                    name="bussinessName"
                    variant="outlined"
                    placeholder={client.bussinessName}
                    value={bussinessName.value}
                
                  />
                </div>
                <div className="col-md-6">
                  <Form.Label className="labels">CUIT</Form.Label>
                  <Form.Control
                    size="ms"
                    className="position-relative"
                    name="CUIT"
                    variant="outlined"
                    placeholder={client.CUIT}
                    value={CUIT.value}
               
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-12">
                  <Form.Label className="labels">Dirección</Form.Label>
                  <Form.Control
                    size="ms"
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
                    className="position-relative"
                    name="email"
                    variant="outlined"
                    value={email.value}
                    onChange={email.onChange}
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
                      placeholder="dd/mm/aaaa"
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
                      className="position-relative"
                      placeholder="dd/mm/aaaa"
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
                  className="btn btn-primary profile-button"
                  type="submit"
                >
                  GUARDAR CAMBIOS
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
