import React, { useEffect, useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllClients } from "../states/calendarClients";
import { getAllBranchesByClient } from "../states/calendarBranches";
import BranchSelect from "./BranchSelect";

const ClientSelect = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.calendarClients);
  const branches = useSelector((state) => state.calendarBranches);

  const showAlgo = () => {
    return <h1>HOLA</h1>;
  };

  const onSubmit = async (data) => {
    try {
      const obtainedBranches = await dispatch(
        getAllBranchesByClient(parseInt(data.client))
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dispatch(getAllClients());
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Seleccione un cliente</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Control
          {...register("client", {
            required: {
              value: true,
              message: "Necesitás este campo",
            },
          })}
          as="select"
          size="ms"
          placeholder="Provincia"
          className="position-relative"
          name="client"
          variant="outlined"
          style={{ margin: "0 auto", width: "40%" }}
        >
          {clients?.map((client) => {
            return <option value={client.id}>{client.bussinessName}</option>;
          })}
        </Form.Control>
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="warning"
          style={{ marginLeft: "45%" }}
        >
          Buscar
        </Button>
      </Form>
      <BranchSelect />
    </>
  );
};

export default ClientSelect;
