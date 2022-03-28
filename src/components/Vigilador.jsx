import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SingleCard from "./SingleCard";
import { getSecurity } from "../states/singleSecurity";

const Vigilador = () => {
  const dispatch = useDispatch();
  const security = useSelector((state) => state.security);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSecurity(e.target.value));
  };
  const showCard = () => {
    return security ? (
        <SingleCard />
    ) : (
      <p style={{fontSize: "40px", marginTop: "200px", textAlign: "center"}}>Busque un vigilador para ver sus datos aquí.</p>
    );
  };

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
      <Form
        onSubmit={handleSubmit}
        className="d-flex"
        style={{ width: "40%", margin: "0 auto" }}
      >
        <FormControl
          type="search"
          placeholder="Buscar Vigilador"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Buscar</Button>
      </Form>
      {showCard()}
    </>
  );
};

export default Vigilador;
