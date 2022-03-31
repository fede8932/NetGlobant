import React, { useEffect } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllSecurity, getSecurity } from "../states/singleSecurity";
import { useInput } from "../hooks/useInput";
import { useNavigate } from "react-router-dom";

const SecurityList = () => {
  const dispatch = useDispatch();
  const securityToSearch = useInput();
  const securities = useSelector((state) => state.securities);
  const navigate = useNavigate();

  useEffect(() => dispatch(getAllSecurity), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSecurity(securityToSearch))
  };

  const searchSecurity = (id) => navigate(`/search/securities/${id}`);

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
      <Table
        striped
        bordered
        hover
        size="sm"
        style={{ width: "70%", margin: "0 auto", marginTop: "60px" }}
      >
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>CUIT</th>
            <th>Dirección</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {securities?.map((security) => (
            <tr key={security.id} onClick={() => searchSecurity(security.id)}>
              <td>{security.name}</td>
              <td>{security.lastName}</td>
              <td>{security.CUIT}</td>
              <td>{security.address}</td>
              <td>{security.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Security;
