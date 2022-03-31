import React, { useEffect } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SingleCard from "./SingleCard";
import { getSecurity } from "../states/singleSecurity";
import { useInput } from "../hooks/useInput";

const Security = () => {
  const dispatch = useDispatch();
  const securityToSearch = useInput();
  const security = useSelector((state) => state.security);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSecurity(securityToSearch.value));
  };

  const showCard = () => {
    return security[0] ? (
      <SingleCard />
    ) : (
      <p style={{ fontSize: "40px", marginTop: "200px", textAlign: "center" }}>
        Busque un vigilador para ver sus datos aquí.
      </p>
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
          {...securityToSearch}
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

export default Security;
