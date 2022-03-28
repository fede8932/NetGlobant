import React from "react";
import { useInput } from "../hooks/useInput";
import { Container, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/estilos.css";

import axios from 'axios';
import { useNavigate } from "react-router-dom";



const SecurityForm = () => {
  const name = useInput();
  const lastName = useInput();
  const cuil = useInput();
  const email = useInput();
  const entryHour = useInput();

  const handleClick = (e) => {
      e.preventDefault();
    console.log(name.value, lastName.value, email.value, cuil.value);

      axios
        .post("/add/office/security", {
          name: name.value,
          lastName: lastName.value,
          cuil: cuil.value,
          email: email.value,
          entryHour: entryHour.value,
      
        })
        .then((res) => res.data)
        .then(() => {
          alert("Vigilador agregado");
          // navigate("/");
        })
        .catch((err) => console.log("error", err));
  };

  return (



    <Container id="main-container" className="d-grid h-100 ">
            <h2 className="text-center p-3 w-100 mt-3 text-secondary">ALTA DE VIGILADORES</h2>
    <Form id="sign-in-form" className="text-center p-3 w-100 ">
      <Form.Group className="mb-3">
        <Form.Control
          size="ms"
          placeholder="Nombre"
          className="position-relative"
          name="name"
          variant="outlined"
          value={name.value}
          onChange={name.onChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          size="ms"
          placeholder="Apellido"
          className="position-relative"
          name="lastName"
          variant="outlined"
          value={lastName.value}
          onChange={lastName.onChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          size="ms"
          placeholder="CUIL"
          className="position-relative"
          name="CUIL"
          variant="outlined"
          value={cuil.value}
          onChange={cuil.onChange}
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
          placeholder="Turno"
          className="position-relative"
          name="entryHour"
          variant="outlined"
          value={entryHour.value}
          onChange={entryHour.onChange}
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

export default SecurityForm;


