import React, { useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { getAllBranchesByClient } from "../states/branches";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const CalendarBranchFilter = (client) => {
  const dispatch = useDispatch();
  const branches = useSelector((state) => state.branches);

  useEffect(() => {
    dispatch(getAllBranchesByClient(client.client.id));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const options = branches?.map((branch) => {
    return (
      <option key={branch.id} value={branch.name}>
        {branch.name}
      </option>
    );
  });

  const onSubmit = (data) => {
    console.log("se selecciono una sucursal", data);
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          position: "relative",
          width: "300px",
          left: "0px",
          top: "10px",
        }}
      >
        <Form.Label className="labels">Sucursal</Form.Label>
        <Form.Control
          as="select"
          size="ms"
          placeholder="Sucursal"
          className="position-relative"
          name="branch"
          variant="outlined"
          {...register("branch", {
            required: {
              value: true,
              message: "Necesitas este campo",
            },
          })}
        >
          <option>Selecciona una sucursal</option>
          {options}
        </Form.Control>

        <Button
          variant="secondary"
          style={{ marginTop: "5px" }}
          onClick={handleSubmit(onSubmit)}
        >
          Asignar vigiladores
        </Button>
      </Form>
    </>
  );
};

export default CalendarBranchFilter;
