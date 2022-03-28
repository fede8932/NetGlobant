import * as React from "react";
import { Container, Button, Form } from "react-bootstrap";

import { FaRegAddressCard } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/estilos.css";
import axios from "axios";

export default function Register() {
  const submit = () => {
    console.log("admin registrado");
    // axios
    //   .post("")
    //   .then((user) => {
    // console.log(user)
    //   });
    //   .catch((err) => console.log(err))
  };

  return (
    <Container id="main-container" className="d-grid h-100  ">
      <Form id="sign-in-form" className="text-center p-3 w-100 ">
        <FaRegAddressCard
          className="mt-5"
          style={{ color: "grey" }}
          size={50}
        />
        <Form.Group className="mb-3 mt-3 ">
          <Form.Control
            type="name"
            size="ms"
            placeholder="Nombre"
            className="position-relative"
          />
        </Form.Group>

        <Form.Group className="mb-3 mt-3 ">
          <Form.Control
            type="email"
            size="ms"
            placeholder="Email"
            className="position-relative"
          />
        </Form.Group>

        <Form.Group className="mb-3 mt-3 ">
          <Form.Control
            type="password"
            size="ms"
            placeholder="Contraseña"
            className="position-relative"
          />
        </Form.Group>

        <div className="d-grid">
          <Button onClick={submit} variant="secondary" size="ms">
            REGISTRARME
          </Button>
        </div>
      </Form>
    </Container>
  );
}
