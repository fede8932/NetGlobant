import React from "react";
import { useInput } from "../hooks/useInput";
import { Container, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/estilos.css";

import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ClientForm = () => {
  
  const bussinessName = useInput();
  const CUIT = useInput();
  const email = useInput();
  const legalAddress = useInput();
  const startContratDate = useInput();
  const endContratDate = useInput();

  const handleClick = (e) => {
    e.preventDefault();
     axios
       .post("/admin/add/client", {
         bussinessName: bussinessName.value,
         CUIT: CUIT.value,
         Email: email.value,
         legalAddress: legalAddress.value,
         startContratDate: startContratDate.value,
         EndContratDate: endContratDate.value,
       })
       .then((res) => res.data)
       .then(() => {
         alert("Cliente agregado");
        //  navigate("/");
       })
       .catch((err) => console.log("error", err));
  };

  return (
    <Container id="main-container" className="d-grid h-100 ">
      <h2 className="text-center p-3 w-100 mt-3 text-secondary">ALTA DE CLIENTES</h2>
      <Form id="sign-in-form" className="text-center p-3 w-100 ">
        <Form.Group className="mb-3">
          <Form.Control
            size="ms"
            placeholder="Nombre"
            className="position-relative"
            name="bussinessName"
            variant="outlined"
            value={bussinessName.value}
            onChange={bussinessName.onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            size="ms"
            placeholder="Dirección"
            className="position-relative"
            name="legalAddress"
            variant="outlined"
            value={legalAddress.value}
            onChange={legalAddress.onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            size="ms"
            placeholder="CUIT"
            className="position-relative"
            name="CUIT"
            variant="outlined"
            value={CUIT.value}
            onChange={CUIT.onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            size="ms"
            placeholder="Email"
            className="position-relative"
            name="email"
            variant="outlined"
            value={email.value}
            onChange={email.onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            size="ms"
            placeholder="Inicio de contrato"
            className="position-relative"
            name="startContratDate"
            variant="outlined"
            value={startContratDate.value}
            onChange={startContratDate.onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            size="ms"
            placeholder="Fin de contrato"
            className="position-relative"
            name="endContratDate"
            variant="outlined"
            value={endContratDate.value}
            onChange={endContratDate.onChange}
          />
        </Form.Group>

        <div className="d-grid">
          <Button onClick={handleClick} variant="secondary" size="lg">
            Agregar
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default ClientForm;
