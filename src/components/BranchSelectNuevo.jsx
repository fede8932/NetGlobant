import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBranchesByClient,
  getAllBranchesByName,
} from "../states/calendarBranches";
import useInput from "../hooks/useInput";
import { Form, FormControl, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const BranchSelectNuevo = () => {
  const dispatch = useDispatch();
  const clientToSearch = useInput("");
  const navigate = useNavigate();
  const branches = useSelector((state) => state.calendarBranches);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      navigate(`/calendar/${data.branch}`);
    } catch (err) {
      console.log(err);
    }
  };

  const getBranches = async (e) => {
    try {
      e.preventDefault();
      const branches = await dispatch(
        getAllBranchesByName(clientToSearch.value)
      );
      //navigate(`/set/branch/${branches.payload[0].clientId}`)
    } catch (err) {
      console.log(err);
    }
  };

  return !branches[0] ? (
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
        onSubmit={getBranches}
        className="d-flex"
        style={{ width: "40%", margin: "0 auto" }}
      >
        <FormControl
          {...clientToSearch}
          type="search"
          placeholder="Buscar Cliente"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" type="submit">
          Buscar
        </Button>
      </Form>
    </>
  ) : (
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
        onSubmit={getBranches}
        className="d-flex"
        style={{ width: "40%", margin: "0 auto", marginBottom: "80px" }}
      >
        <FormControl
          {...clientToSearch}
          type="search"
          placeholder="Buscar Cliente"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="warning" type="submit">
          Buscar
        </Button>
      </Form>
      <h1 style={{ textAlign: "center" }}>Seleccione una sucursal:</h1>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex"
        style={{ width: "40%", margin: "0 auto" }}
      >
        <Form.Control
          {...register("branch", {
            required: {
              value: true,
              message: "Necesitás este campo",
            },
          })}
          as="select"
          size="ms"
          className="me-2"
          name="branch"
          variant="outlined"
        >
          {branches?.map((branch) => {
            return <option value={branch.id}>{branch.name}</option>;
          })}
        </Form.Control>
        <Button onClick={handleSubmit(onSubmit)} variant="warning">
          Calendario
        </Button>
      </Form>
    </>
  );
};

export default BranchSelectNuevo;
