import React from "react";
import { useDispatch } from "react-redux";
import { getAllBranchesByName } from "../states/calendarBranches";
import useInput from "../hooks/useInput";
import { Form, FormControl, Button } from "react-bootstrap";

const BranchSelectNuevo = () => {
  const dispatch = useDispatch();
  const clientToSearch = useInput("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const client = await dispatch(getAllBranchesByName(clientToSearch.value));
      console.log("CLIENTE", client);
    } catch (err) {
      console.log(err);
    }
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
        Seleccione un cliente:
      </h1>
      <Form
        onSubmit={handleSubmit}
        className="d-flex"
        style={{ width: "40%", margin: "0 auto" }}
      >
        <FormControl
          {...clientToSearch}
          type="search"
          placeholder="Buscar Vigilador"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Buscar</Button>
      </Form>
    </>
  );
};

export default BranchSelectNuevo;
