import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import SingleCard from "./SingleCard";

const Vigilador = () => {
  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        Vigiladores:
      </h1>
      <Form className="d-flex" style={{width: "40%", margin: "0 auto"  }}>
        <FormControl
          type="search"
          placeholder="Buscar Vigilador"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Buscar</Button>
      </Form>
      <SingleCard />
    </>
  );
};

export default Vigilador;
