import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllBranchesByClient } from "../states/calendarBranches";

const BranchSelect = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const branches = useSelector((state) => state.calendarBranches);

  const onSubmit = async (data) => {
    try {
      console.log(data)
      const branches = await dispatch(getAllBranchesByClient(data.branch))
      console.log(branches.data)
    } catch (err) {
      console.log(err);
    }
  };

  return branches[0] ? ( <>
    <h1 style={{ textAlign: "center" }}>Seleccione una sucursal</h1>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Control
        {...register("branch", {
          required: {
            value: true,
            message: "Necesitás este campo",
          },
        })}
        as="select"
        size="ms"
        placeholder="Sucursal"
        className="position-relative"
        name="branch"
        variant="outlined"
        style={{ margin: "0 auto", width: "40%" }}
      >
        {branches?.map((branch) => {
          return <option value={branch.id}>{branch.bussinessName}</option>;
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
  </>
) : <h1 style={{textAlign: "center"}}>Elija un cliente</h1>
};

export default BranchSelect;
